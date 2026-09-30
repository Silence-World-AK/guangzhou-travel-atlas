import { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, CarFront, ChevronDown, ExternalLink, MapPin, Plane, Search, TrainFront, UsersRound, X } from 'lucide-react';
import { routes, imageSources, getBudgetTotal, formatMoney } from './data';
import './style.css';

const RouteMap = lazy(() => import('./RouteMap'));
const categoryLabels = { culture: '人文', coast: '城市与海岸', nature: '自然松弛' };
const modeLabels = { 'no-car': '不租车', rent: '当地租车', 'self-drive': '广州自驾' };
const budgetLabels = { transport: '往返大交通 / 自驾路费', local: '当地移动 / 租车', lodging: '三晚住宿', food: '餐饮与主要门票' };

function scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
function goHome() { window.location.hash = '/'; scrollTop(); }
function openRoute(id) { window.location.hash = `/route/${id}`; scrollTop(); }
function useRouteId() {
  const [id, setId] = useState(() => location.hash.match(/^#\/route\/(.+)$/)?.[1] ?? null);
  useEffect(() => {
    const onHash = () => setId(location.hash.match(/^#\/route\/(.+)$/)?.[1] ?? null);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return id;
}

function Header({ routeOpen, onMode, mode, onBudget }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="brand" onClick={goHome} aria-label="回到全部路线">山与行</button>
        <span className="brand-note">从城市出发，走向真实的中国</span>
        <nav className="header-nav" aria-label="主要导航">
          <button className={!routeOpen && mode === 'all' ? 'current' : ''} onClick={() => { goHome(); onMode('all', searchText); }}>全部路线</button>
          <button className={!routeOpen && mode === 'no-car' ? 'current' : ''} onClick={() => { goHome(); onMode('no-car', searchText); }}>不租车</button>
          <button className={!routeOpen && mode === 'rent' ? 'current' : ''} onClick={() => { goHome(); onMode('rent', searchText); }}>租车自驾</button>
          <button onClick={onBudget}>预算说明</button>
        </nav>
        <div className={`header-search ${searchOpen ? 'open' : ''}`}>
          {searchOpen ? <input autoFocus value={searchText} onChange={(event) => { setSearchText(event.target.value); onMode(mode, event.target.value); }} onKeyDown={(event) => { if (event.key === 'Escape') { setSearchOpen(false); setSearchText(''); onMode(mode, ''); } }} placeholder="搜索目的地" aria-label="搜索目的地" /> : null}
          <button aria-label={searchOpen ? '关闭搜索' : '搜索路线'} onClick={() => { if (searchOpen) { setSearchText(''); onMode(mode, ''); } setSearchOpen(!searchOpen); }}><Search size={20} strokeWidth={1.8} /></button>
        </div>
      </div>
    </header>
  );
}

function MiniRoute({ route }) {
  const points = route.stops.filter((point) => point.name !== '广州');
  const lats = points.map((p) => p.lat), lngs = points.map((p) => p.lng);
  const minLat = Math.min(...lats), maxLat = Math.max(...lats), minLng = Math.min(...lngs), maxLng = Math.max(...lngs);
  const spanLat = Math.max(maxLat - minLat, .03), spanLng = Math.max(maxLng - minLng, .03);
  const coords = points.map((p) => [14 + ((p.lng - minLng) / spanLng) * 82, 51 - ((p.lat - minLat) / spanLat) * 37]);
  return <svg className="mini-route" viewBox="0 0 112 62" role="img" aria-label={`${route.name}路线示意`}>
    <polyline points={coords.map(([x,y])=>`${x},${y}`).join(' ')} fill="none" stroke="#357366" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    {coords.map(([x,y],i)=><circle key={i} cx={x} cy={y} r={i===0||i===coords.length-1 ? 3.4 : 2.5} fill="#26574d" stroke="#f7f6f2" strokeWidth="1.2" />)}
  </svg>;
}

function TransportIcon({ mode }) { return mode === 'no-car' ? <TrainFront size={15} /> : <CarFront size={15} />; }
function Price({ route, compact = false }) {
  const [low, high] = getBudgetTotal(route).map((v) => Math.round(v / 3 / 100) * 100);
  return <div className={compact ? 'price compact' : 'price'}><span>预计人均</span><strong>¥{formatMoney(low)}–{formatMoney(high)}</strong></div>;
}

function RouteRow({ route, index }) {
  return <button className={`route-row ${index === 0 ? 'featured' : ''}`} onClick={() => openRoute(route.id)}>
    <span className="route-number">{String(index + 1).padStart(2, '0')}</span>
    <img src={imageSources[route.hero].src} alt={imageSources[route.hero].context || `${route.name}景色`} loading={index < 3 ? 'eager' : 'lazy'} />
    <span className="row-main"><strong>{route.name}</strong><span className="row-teaser">{route.teaser}</span><span className="row-meta"><TransportIcon mode={route.mode} /> {modeLabels[route.mode]} <UsersRound size={14} /> 3 人 · 4 天 3 晚</span><span className="mobile-price">人均 ¥{formatMoney(Math.round(getBudgetTotal(route)[0]/3/100)*100)} 起</span></span>
    <Price route={route} compact />
    <MiniRoute route={route} />
    <ArrowRight className="row-arrow" size={19} strokeWidth={1.7} />
  </button>;
}

function Overview({ mode, category, setCategory, query }) {
  const filtered = useMemo(() => routes.filter((route) => {
    const modeMatch = mode === 'all' || (mode === 'rent' ? route.mode !== 'no-car' : route.mode === 'no-car');
    const categoryMatch = category === 'all' || category === route.category;
    const queryMatch = !query || `${route.name}${route.teaser}${route.stay}`.toLowerCase().includes(query.toLowerCase());
    return modeMatch && categoryMatch && queryMatch;
  }), [mode, category, query]);
  return <>
    <section className="overview-hero">
      <div className="hero-photo" role="img" aria-label="广西明仕田园实拍" style={{ backgroundImage: `url(${imageSources.mingshi.src})` }} />
      <div className="overview-hero-inner"><h1>从广州出发，去山海与小城</h1><p className="hero-sub">12 条四天三晚路线 · 10 月 4—7 日 · 3 人同行</p><p className="hero-copy">在四天三晚的假期里，<br />去看山、看海，也去遇见一座小城的日常。</p></div>
    </section>
    <main className="overview-main">
      <div className="filter-bar"><span>路线主题</span><div className="filter-tabs" role="tablist" aria-label="路线主题">
        {[['all','全部'],['culture','人文'],['coast','城市与海岸'],['nature','自然松弛']].map(([value,label])=><button key={value} role="tab" aria-selected={category===value} className={category===value?'active':''} onClick={()=>setCategory(value)}>{label}</button>)}
      </div><span className="filter-count">当前显示 {filtered.length} 条</span></div>
      <div className="route-list">{filtered.length ? filtered.map((route,index)=><RouteRow key={route.id} route={route} index={index} />) : <div className="empty-state">没有符合条件的路线。试试清除搜索词或切换筛选。</div>}</div>
      <div className="list-foot"><ChevronDown size={17} /> 点击任一路线，查看地图、每日行程与费用拆分</div>
    </main>
    <section className="editorial-footer"><div className="footer-photo" style={{ backgroundImage: `url(${imageSources.guposhan.src})` }} /><div className="editorial-copy"><h2>目的地之外，<br />还有四天三晚的生活方式</h2><p>每条路线都以住得下、走得顺为前提。预算是规划区间，地图是站点示意，真正的假期留给你们三个人。</p></div></section>
  </>;
}

function ImageLightbox({ imageKey, caption, onClose }) {
  useEffect(() => { const handler = (e) => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler); }, [onClose]);
  const image = imageSources[imageKey];
  return <div className="lightbox" onClick={onClose} role="presentation"><div className="lightbox-inner" onClick={(event)=>event.stopPropagation()} role="dialog" aria-modal="true" aria-label={caption}>
    <button className="lightbox-close" onClick={onClose} aria-label="关闭图片"><X size={24} /></button><img src={image.src} alt={image.context || caption} /><div><strong>{image.context || caption}</strong><a href={image.url} target="_blank" rel="noreferrer">图片来源：{image.credit} <ExternalLink size={14}/></a><a href={image.license} target="_blank" rel="noreferrer">查看许可协议 <ExternalLink size={14}/></a></div>
  </div></div>;
}

function Detail({ route }) {
  const [showFull, setShowFull] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [totalLow,totalHigh] = getBudgetTotal(route);
  const regionStops = route.stops.filter((p)=>p.name!=='广州');
  return <>
    <main className="detail-main">
      <button className="back-link" onClick={goHome}><ArrowLeft size={17}/> 返回所有路线</button>
      <section className="detail-hero"><div className="detail-hero-text"><div className="detail-location">{categoryLabels[route.category]} · {modeLabels[route.mode]} · {route.batch==='earlier'?'早前备选':'新选路线'}</div><h1>{route.name}</h1><p>{route.intro}</p>
        <div className="detail-facts"><span><CalendarDays size={20}/>四天三晚<small>2026 年 10 月 4—7 日</small></span><span><UsersRound size={20}/>三人同行<small>费用按 3 人估算</small></span><span>{route.mode==='no-car'?<TrainFront size={20}/>:<CarFront size={20}/>} {modeLabels[route.mode]}<small>{route.stay}</small></span></div>
      </div><figure className="detail-hero-photo"><img src={imageSources[route.hero].src} alt={imageSources[route.hero].context || `${route.name}实拍景色`} /><figcaption>{imageSources[route.hero].context || '实景图片'} · <a href={imageSources[route.hero].url} target="_blank" rel="noreferrer">查看来源</a></figcaption></figure></section>
      <section className="map-section" id="route-map"><div className="map-title"><h2>旅行线路图</h2><button onClick={()=>setShowFull(!showFull)}>{showFull?'聚焦目的地':'查看广州往返'} <ArrowRight size={15}/></button></div><div className="map-layout"><Suspense fallback={<div className="map-loading">正在加载地图…</div>}><RouteMap key={`${route.id}-${showFull}`} route={route} showFull={showFull}/></Suspense><div className="route-overview"><h3>路线概览</h3><ol>{regionStops.map((stop,index)=><li key={`${index}-${stop.name}`}><span className="stop-dot"/><strong>{stop.name}</strong><small>{index===0?'进入目的地区域':index===regionStops.length-1?'离开目的地区域':stop.via==='train'?'铁路连接':'当地移动'}</small></li>)}</ol><p><MapPin size={16}/>{route.transport}</p><p className="map-note">地图连接主要停靠点，仅用于理解方位；道路、班次与实际行驶路线以导航及订票平台为准。</p></div></div></section>
      <section className="days-section"><h2>每日行程</h2><div className="days-grid">{route.days.map((dayItem,index)=><article className="day-item" key={index}><div className="day-heading"><span className="timeline-dot"/><span>第 {index+1} 天</span><time>10 月 {index+4} 日</time></div><h3>{dayItem.title}</h3><button className="day-photo" onClick={()=>setLightbox({image:dayItem.image,caption:dayItem.title})}><img loading="lazy" src={imageSources[dayItem.image].src} alt={imageSources[dayItem.image].context || `${dayItem.title}景色`} /></button><p>{dayItem.description}</p><div className="day-stay">{index===3?<Plane size={15}/>:<MapPin size={15}/>} {dayItem.stay}</div></article>)}</div></section>
      <section className="sights-section"><div className="section-heading"><h2>沿途亮点</h2><span>下方评价为行程编辑判断，并非平台用户评分</span></div><div className="sights-grid">{route.sights.map((item,index)=><article className="sight-item" key={index}><button className="sight-photo" onClick={()=>setLightbox({image:item.image,caption:item.name})}><img loading="lazy" src={imageSources[item.image].src} alt={imageSources[item.image].context || item.name}/></button><h3>{item.name}</h3>{imageSources[item.image].context ? <small className="image-context">图片说明：{imageSources[item.image].context}</small> : null}<p>{item.review}</p><a className="image-credit" href={imageSources[item.image].url} target="_blank" rel="noreferrer">图片：{imageSources[item.image].credit} <ExternalLink size={13}/></a><a className="image-credit" href={imageSources[item.image].license} target="_blank" rel="noreferrer">许可协议 <ExternalLink size={13}/></a></article>)}</div></section>
      <section className="evaluation-section"><h2>这条线的感觉</h2><div><p><strong>值得去：</strong>{route.verdict}</p><p><strong>要留意：</strong>{route.watch}</p></div></section>
      <section className="budget-section"><div className="budget-table"><h2>预计消费 <span>3 人合计</span></h2>{Object.entries(route.budget).map(([key,[min,max]])=><div className="budget-row" key={key}><span>{budgetLabels[key]}</span><strong>¥{formatMoney(min)}–{formatMoney(max)}</strong></div>)}<div className="budget-total"><span>合计区间</span><strong>¥{formatMoney(totalLow)}–{formatMoney(totalHigh)}</strong></div><div className="per-person">约 ¥{formatMoney(Math.round(totalLow/3/100)*100)}–{formatMoney(Math.round(totalHigh/3/100)*100)} / 人</div></div>
      <aside className="budget-note"><h3>费用口径</h3><p>按 3 位成人、2026 年 10 月 4—7 日、3 晚住宿估算。住宿按一间可住 3 人的房型或两间标准房考虑；餐饮包含普通正餐与主要景点门票。</p><p>这是规划区间，<strong>不是实时票价或已确认余位</strong>。机票、高铁、租车和国庆住宿会快速变化；以实际下单页面为准。</p><p>自驾线路的往返路费含油费与高速费；当地租车线路另计租车、油费和停车。</p></aside></section>
      <section className="sources-section"><h2>参考资料</h2><div>{route.sources.map((item)=><a key={item.url} href={item.url} target="_blank" rel="noreferrer">{item.label}<ExternalLink size={14}/></a>)}</div></section>
    </main>
    {lightbox?<ImageLightbox imageKey={lightbox.image} caption={lightbox.caption} onClose={()=>setLightbox(null)}/>:null}
  </>;
}

function BudgetDialog({ onClose }) {
  useEffect(() => { const handler = (e) => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown',handler); return () => window.removeEventListener('keydown',handler); },[onClose]);
  return <div className="budget-dialog-backdrop" onClick={onClose} role="presentation"><div className="budget-dialog" role="dialog" aria-modal="true" aria-label="预算说明" onClick={(event)=>event.stopPropagation()}><button className="dialog-close" onClick={onClose} aria-label="关闭"><X size={20}/></button><h2>预算说明</h2><p>页面金额均为 <strong>3 人、4 天 3 晚</strong> 的规划估算，不是实时查询结果。列表展示人均区间，详情页展示四类费用与三人合计。</p><p>机票和火车票按普通经济舱、二等座；住宿按可住三人的房型或两间标准房；自驾路费按一辆普通汽车估算。具体报价以预订时为准。</p><p>图片用于展示对应景区，拍摄年份与旅行当日景色可能不同。地图为停靠点示意，不承担导航用途。</p><button className="dialog-primary" onClick={onClose}>我知道了</button></div></div>;
}

export default function App() {
  const routeId = useRouteId();
  const route = routes.find((item)=>item.id===routeId);
  const [mode,setMode] = useState('all');
  const [category,setCategory] = useState('all');
  const [query,setQuery] = useState('');
  const [budgetOpen,setBudgetOpen] = useState(false);
  const handleMode = (nextMode,nextQuery='') => {setMode(nextMode);setQuery(nextQuery);};
  return <><Header routeOpen={!!route} mode={mode} onMode={handleMode} onBudget={()=>setBudgetOpen(true)}/>{route?<Detail key={route.id} route={route}/>:<Overview mode={mode} category={category} setCategory={setCategory} query={query}/>}<footer className="site-footer"><span>山与行 · 广州出发的四天三晚提案</span><span>景点实拍 · 站点示意地图 · 费用为估算</span></footer>{budgetOpen?<BudgetDialog onClose={()=>setBudgetOpen(false)}/>:null}</>;
}
