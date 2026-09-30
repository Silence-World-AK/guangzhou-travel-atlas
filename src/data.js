const photo = (file, credit, url, license, context = '') => ({
  src: `${import.meta.env.BASE_URL}images/${file}.jpg`, credit, url, license, context,
});

export const imageSources = {
  huashan: photo('huashan', 'xiquinhosilva · CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Zuojiang_Huashan_Rock_Art_(53565287759).jpg', 'https://creativecommons.org/licenses/by/2.0/'),
  mingshi: photo('mingshi', 'tsechanwah · CC BY 3.0', 'https://commons.wikimedia.org/wiki/File:%E6%98%8E%E4%BB%95%E7%94%B0%E5%9C%92,_%E5%BB%A3%E8%A5%BF%E7%9C%81_-_panoramio_(3).jpg', 'https://creativecommons.org/licenses/by/3.0/'),
  jingdezhen: photo('jingdezhen', 'Zhu Pei · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:01-Jingdezhen_Imperial_Kiln_Museum.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/'),
  ganzhou: photo('ganzhou', 'Liangxiao · CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Yugutai.JPG', 'https://creativecommons.org/licenses/by-sa/3.0/'),
  peitian: photo('peitian', 'Zhangzhugang · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Liancheng_Peitian_2013.10.06_16-51-03.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/'),
  changting: photo('changting', 'N509FZ · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Jichuan_Gate,_Changting_(20250125124334).jpg', 'https://creativecommons.org/licenses/by-sa/4.0/'),
  dali: photo('dali', '龙歌谷 · CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:%E6%A6%95%E6%B1%9F%E5%A4%A9%E4%B8%8B%E7%AC%AC%E4%B8%80%E4%BE%97%E5%AF%A8-%E6%A1%82%E7%A9%BF%E8%B6%8A_-_panoramio_(2).jpg', 'https://creativecommons.org/licenses/by-sa/3.0/', '榕江其他侗寨鼓楼，非大利侗寨实景'),
  zhaoxing: photo('zhaoxing', 'Chensiyuan · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:1_zhaoxing_2015.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/'),
  sanya: photo('sanya', 'Shizhao · CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Yalong_Bay_2007.JPG', 'https://creativecommons.org/licenses/by-sa/3.0/'),
  wanning: photo('wanning', 'Zhangmoon618 · CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Shimei_Bay_in_Wanning.jpg', 'https://creativecommons.org/licenses/by-sa/3.0/'),
  wenzhou: photo('wenzhou', 'Popolon · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Jiangxin_Island_West_Pagoda.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/'),
  xiapu: photo('xiapu', 'Jay Huang · CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Xiapu_Sunrise_-_Flickr_-_Jaykhuang.jpg', 'https://creativecommons.org/licenses/by/2.0/'),
  guposhan: photo('guposhan', 'MaiKPhoto · CC BY 2.0', 'https://www.flickr.com/photos/9394586@N04/1791006165', 'https://creativecommons.org/licenses/by/2.0/'),
  guanzhishan: photo('guanzhishan', 'rheins · CC BY 3.0', 'https://commons.wikimedia.org/wiki/File:%E8%BF%9C%E6%9C%9B%E5%86%A0%E8%B1%B8%E5%B1%B1_-_Guanzhai_Mountain_-_2010.07_-_panoramio.jpg', 'https://creativecommons.org/licenses/by/3.0/'),
  kaiping: photo('kaiping', 'DragonSamYU · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Kaiping_Diaolou_in_Zili_Village_-_20181028-1.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/'),
  luokeng: photo('luokeng', 'PQ77wd · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:NaamSeoiWu.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/', '韶关乳源南水水库，非罗坑湖区实景'),
  lianshan: photo('lianshan', 'PQ77wd · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:LaiTauPing_Terrace_(EAST).jpg', 'https://creativecommons.org/licenses/by-sa/4.0/'),
  shangbao: photo('shangbao', 'Lis-Sanchez · CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:%E6%B1%9F%E8%A5%BF%E5%B4%87%E4%B9%89%E5%AE%A2%E5%AE%B6%E6%A2%AF%E7%94%B0%EF%BC%88Chongyi_Terraces%EF%BC%89.jpg', 'https://creativecommons.org/licenses/by-sa/4.0/', '崇义梯田实景，原图未标明上堡具体位置'),
};

const pt = (name, lat, lng, via = 'car') => ({ name, lat, lng, via });
const day = (title, description, stay, image) => ({ title, description, stay, image });
const sight = (name, image, review) => ({ name, image, review });
const source = (label, url) => ({ label, url });

export const routes = [
  {
    id: 'nanning-west', name: '南宁向西自驾环线', category: 'nature', mode: 'rent', batch: 'new', hero: 'mingshi',
    teaser: '沿左江向西，花山岩画与明仕峰林之间留两晚给田野。',
    intro: '从南宁机场取车，向宁明、龙州和大新走一条桂西南小环线。花山看壮族先民的岩画，明仕留出完整一天慢走；广东只是返程终点。',
    transport: '广州往返南宁飞机；吴圩机场同点取还车，三人共用一辆车。', stay: '宁明 1 晚 · 大新明仕乡村 2 晚',
    verdict: '自然松弛感最强，开车日与休息日分配合理。', watch: '花山船班受水位影响；观星取决于云量，明仕核心区国庆仍可能热闹。',
    budget: { transport: [2700, 6000], local: [1100, 1900], lodging: [1500, 3300], food: [1500, 2500] },
    stops: [pt('广州',23.1291,113.2644,'start'),pt('南宁吴圩机场',22.6083,108.1724,'flight'),pt('宁明',22.1366,107.0728),pt('花山岩画',22.24621,107.03513),pt('龙州',22.35,106.85),pt('大新明仕',22.70565,106.92471),pt('南宁吴圩机场',22.6083,108.1724),pt('广州',23.1291,113.2644,'flight')],
    days: [day('入桂西南','中午前落地南宁，取车经崇左到宁明，傍晚休息。','宁明','mingshi'),day('花山与边路','上午乘船看花山岩画，下午经龙州驶往大新。','大新明仕','huashan'),day('把一天留给田野','沿明仕河慢走或骑行，午后休息；晴夜在合适地点观星。','大新明仕','mingshi'),day('慢返南宁','早餐后出发回吴圩机场，还车并乘傍晚航班。','返广州','mingshi')],
    sights: [sight('左江花山岩画','huashan','真正有历史分量的看点。船上远观岩画与江岸地貌，适合愿意听讲解的人。'),sight('大新明仕乡村','mingshi','峰林和河田适合住两晚慢慢看；离开核心游览区，步行体验更舒展。')],
    sources: [source('文化和旅游部：崇左边海风景道','https://zhuanti.mct.gov.cn/csxz2022/guangxi/detail/1523.html'),source('广西假期天气展望','https://www.weather.com.cn/guangxi/tqxw/4806711.shtml')]
  },
  {
    id: 'jingdezhen-ganzhou', name: '景德镇 → 赣州', category: 'culture', mode: 'no-car', batch: 'new', hero: 'jingdezhen',
    teaser: '从千年窑火到赣江宋城，两段历史各有鲜明主题。', intro: '先在景德镇集中看制瓷史与手作，再沿江西境内的铁路往南到赣州，把最后一天留给古城的街巷与水利遗存。',
    transport: '广州飞南昌，转高铁到景德镇；景德镇到赣州高铁；赣州高铁回广州。', stay: '景德镇 2 晚 · 赣州 1 晚',
    verdict: '人文密度最高，两座城市的内容都足够值得专程前往。', watch: '10 月 7 日赣州返广州的车票是行程关键；御窑与博物馆请提前核对预约。',
    budget: { transport:[2500,5200],local:[300,700],lodging:[1400,2800],food:[1300,2300] },
    stops:[pt('广州',23.1291,113.2644,'start'),pt('南昌',28.68,115.86,'flight'),pt('景德镇',29.27,117.18,'train'),pt('赣州',25.83,114.93,'train'),pt('广州',23.1291,113.2644,'train')],
    days:[day('到达瓷都','飞南昌并转高铁到景德镇，傍晚走陶阳里。','景德镇','jingdezhen'),day('专心看瓷','中国陶瓷博物馆、御窑遗址，留半天给窑口或手作。','景德镇','jingdezhen'),day('沿江西南下','上午继续逛老城，下午乘高铁到赣州。','赣州','ganzhou'),day('宋城慢走','宋城墙、郁孤台、福寿沟；下午高铁返广州。','返广州','ganzhou')],
    sights:[sight('景德镇御窑博物馆','jingdezhen','适合把陶瓷工艺与城市历史一次看明白，建筑本身也值得停留。'),sight('赣州郁孤台与宋城','ganzhou','宋代街巷、城墙和福寿沟集中，步行即可形成完整的一天。')],
    sources:[source('景德镇市政府：陶阳里御窑','https://jdz.gov.cn/zjcd/mljdz/sj/t932856.shtml'),source('赣州市政府：江南宋城','https://www.ganzhou.gov.cn/zfxxgk/c144214/202211/e2bccf991dc44ac89ea67cbe73a91887.shtml')]
  },
  {
    id:'hakka-longting', name:'连城 → 长汀 → 瑞金', category:'culture',mode:'no-car',batch:'new',hero:'peitian',
    teaser:'古村、客家府城与苏区旧址，沿闽赣交界顺路走。',intro:'飞入闽西，从培田的明清民居走到长汀旧城，再短距离转到瑞金。路线横跨相邻地区，主题始终围绕客家与近代史。',
    transport:'广州直飞连城冠豸山机场；当地约车与短途铁路；瑞金经赣州换乘高铁返广州。',stay:'长汀 2 晚 · 瑞金 1 晚',
    verdict:'历史线索连贯，村落和城镇都可以慢看。',watch:'瑞金返广州需换乘；若对革命史兴趣不大，瑞金一晚的吸引力会下降。',
    budget:{transport:[2400,5200],local:[600,1200],lodging:[1300,2700],food:[1200,2200]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('连城机场',25.71,116.75,'flight'),pt('培田古村',25.58,116.66),pt('长汀',25.83,116.36),pt('瑞金',25.89,116.03,'train'),pt('赣州',25.83,114.93,'train'),pt('广州',23.1291,113.2644,'train')],
    days:[day('入闽西','飞连城，约车看培田古村，晚住长汀。','长汀','peitian'),day('汀州古城','走城墙与旧街，参观长汀县博物馆。','长汀','changting'),day('短途到瑞金','上午闲逛，下午到瑞金看叶坪旧址。','瑞金','changting'),day('红井与返程','上午看红井，下午经赣州转高铁回广州。','返广州','peitian')],
    sights:[sight('培田古村','peitian','民居与宗祠的保存完整度高，适合慢看建筑细节。'),sight('长汀古城','changting','仍有真实居民生活的县城，夜晚沿汀江散步比赶景点更好。')],
    sources:[source('福建文旅厅：培田村','https://wlt.fujian.gov.cn/zwgk/ztzl/fjsjplyc/lyslcxptc/201908/t20190808_5294399.htm'),source('福建省政府：长汀古城','https://www.fujian.gov.cn/zwgk/ztzl/sxzygwzxsgzx/sdjj/wvjj/202307/t20230722_6211821.htm'),source('广州—连城航线信息','https://www.hkcd.com.hk/hkcdweb/content/2026/09/06/content_8773488.html')]
  },
  {
    id:'dong-villages',name:'贵阳 → 榕江 → 从江',category:'culture',mode:'no-car',batch:'new',hero:'dali',
    teaser:'住进大利侗寨，再沿贵广铁路到肇兴与堂安。',intro:'飞到贵阳后进黔东南，不跨区追景。把两晚留给安静的大利侗寨，再到肇兴与堂安，看两种不同的侗寨生活尺度。',
    transport:'广州飞贵阳；贵阳北至榕江、榕江至从江高铁；从江高铁回广州。站到寨约车。',stay:'大利附近 2 晚 · 肇兴 1 晚',
    verdict:'侗族建筑与村寨生活最鲜明，大利比热门景区更安静。',watch:'4—5 日下雨会影响村道体验；榕江站接送应提前联系住宿。',
    budget:{transport:[2500,5400],local:[600,1200],lodging:[1300,2800],food:[1200,2200]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('贵阳',26.65,106.63,'flight'),pt('榕江',25.93,108.52,'train'),pt('大利侗寨',25.98,108.63),pt('从江站',25.91,109.17,'train'),pt('肇兴侗寨',25.91,109.17),pt('广州',23.1291,113.2644,'train')],
    days:[day('飞入贵州','早班机飞贵阳，转贵广高铁到榕江，约车进大利。','大利附近','dali'),day('大利整日','看鼓楼、风雨桥与木楼，留时间给村寨日常。','大利附近','dali'),day('移到肇兴','高铁到从江，进肇兴侗寨，傍晚走寨子。','肇兴','zhaoxing'),day('堂安与返程','上午到堂安看梯田，下午从江站高铁回广州。','返广州','zhaoxing')],
    sights:[sight('大利侗寨','dali','规模不大，住一晚以上才能体会溪谷与木构村落的日常节奏。'),sight('肇兴侗寨','zhaoxing','鼓楼群有代表性，设施方便；假期人多，早晨和堂安更适合慢走。')],
    sources:[source('国家铁路局：大利侗寨','https://source.nra.gov.cn/ztzl/hd/zjrj/dcrj/zjrj/202309/t20230921_343213.shtml'),source('文化和旅游部：肇兴—堂安','https://zhuanti.mct.gov.cn/xczgshsh2023/syxj/detail_shi/3822.html')]
  },
  {
    id:'hainan-east',name:'三亚 → 万宁 → 海口',category:'coast',mode:'no-car',batch:'new',hero:'wanning',
    teaser:'从城市海滨走到更松弛的海湾，沿东环高铁北上。',intro:'飞到岛南端，在三亚休息一晚，再把两晚留在万宁海边。最后从美兰机场返广州，岛内一直顺东岸往北。',
    transport:'广州飞三亚；三亚—万宁—美兰乘海南环岛高铁；海口飞广州。',stay:'三亚 1 晚 · 万宁 2 晚',
    verdict:'交通最顺的一条海岸线，适合三人不租车看海。',watch:'国庆海湾住宿价格波动大；海况不稳时只安排岸上活动。',
    budget:{transport:[3300,7100],local:[600,1300],lodging:[2200,5100],food:[1500,2700]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('三亚',18.25,109.51,'flight'),pt('万宁',18.80,110.40,'train'),pt('美兰机场',19.94,110.46,'train'),pt('广州',23.1291,113.2644,'flight')],
    days:[day('飞到岛南','抵达三亚，只安排海边散步和晚餐。','三亚','sanya'),day('北上万宁','乘东环高铁到万宁，下午在海湾住下。','万宁','wanning'),day('一湾一渔镇','选石梅湾或附近海岸慢走，再看一个渔镇。','万宁','wanning'),day('高铁接飞机','从万宁乘高铁到美兰站，海口飞广州。','返广州','wanning')],
    sights:[sight('三亚海岸','sanya','第一晚承担放松与适应节奏的作用，不需要赶多个海滩。'),sight('万宁石梅湾','wanning','适合长时间待在一片海边；三人可分摊离海较近的房费。')],
    sources:[source('三亚机场：海南环岛高铁站点','https://www.sanyaairport.com/gtdc'),source('铁路 12306','https://www.12306.cn/index/')]
  },
  {
    id:'wenzhou-xiapu',name:'温州 → 霞浦',category:'coast',mode:'no-car',batch:'new',hero:'xiapu',
    teaser:'瓯江孤屿之后，沿浙闽海岸到滩涂与渔村。',intro:'飞温州，在瓯江边住一晚；动车沿海岸向南到霞浦住两晚，只选一个海岸片区与一次合适潮位，不为了拍照来回奔波。',
    transport:'广州飞温州；温州南至霞浦、霞浦至福州乘动车；福州飞广州。',stay:'温州 1 晚 · 霞浦 2 晚',
    verdict:'江城与东海岸的景观变化很鲜明，路线上没有硬凑的停靠城市。',watch:'4—5 日沿海风较大，霞浦观景需看潮汐和天气；这一条作为天气备选。',
    budget:{transport:[2900,6100],local:[500,1000],lodging:[1600,3200],food:[1300,2300]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('温州',27.99,120.69,'flight'),pt('江心屿',28.01,120.64),pt('霞浦',26.89,120.00,'train'),pt('福州机场',25.93,119.66,'train'),pt('广州',23.1291,113.2644,'flight')],
    days:[day('飞温州','到瓯江边，走江心屿与老城。','温州','wenzhou'),day('沿海入闽','温州南坐动车到霞浦，下午走一段海岸。','霞浦','xiapu'),day('看潮而行','按天气和潮位选一处滩涂或渔村，留足时间看日落。','霞浦','xiapu'),day('南下返程','动车到福州，转机回广州。','返广州','xiapu')],
    sights:[sight('温州江心屿','wenzhou','瓯江上的孤屿适合城市步行，历史建筑和水岸景色兼有。'),sight('霞浦滩涂','xiapu','潮汐、劳作与光线共同构成景观；没有好天气时不要为了一个机位赶路。')],
    sources:[source('温州文旅：江心屿','https://wl.wenzhou.gov.cn/art/2018/5/25/art_1653509_34537278.html'),source('福建日报：霞浦滩涂','https://www.fjdaily.com/app/content/2023-12/04/content_2210910.html'),source('浙江假期天气','https://zjnews.zjol.com.cn/yc/qmt/202609/t20260929_31941781.shtml')]
  },
  {
    id:'hezhou-gupo',name:'贺州姑婆山',category:'nature',mode:'no-car',batch:'earlier',hero:'guposhan',
    teaser:'森林度假，接驳最简单；三晚留在贺州一带。',intro:'从广州乘高铁到贺州，约车到姑婆山附近。重点放在森林步道、溪流和休息，不把黄姚等远处景点硬塞进来。',
    transport:'广州南—贺州高铁；贺州站到姑婆山约车，途中少量网约车。',stay:'姑婆山或贺州市区 3 晚',
    verdict:'不租车自然线里最省心，适合想住稳、每天只做一件事。',watch:'山里住宿与餐饮选择少；景区接驳与返程车要提前确认。',
    budget:{transport:[900,1800],local:[350,800],lodging:[1200,2800],food:[1200,2200]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('贺州站',24.40,111.56,'train'),pt('姑婆山',24.59355,111.56386),pt('贺州老城',24.40,111.55),pt('广州',23.1291,113.2644,'train')],
    days:[day('抵达贺州','高铁到贺州，约车进姑婆山附近住下。','贺州/姑婆山','guposhan'),day('森林整日','走一条轻徒步线，看溪流与瀑布。','贺州/姑婆山','guposhan'),day('慢半拍','上午休息，下午在贺州市区散步和吃饭。','贺州/姑婆山','guposhan'),day('高铁回程','早餐后回贺州站，乘高铁返广州。','返广州','guposhan')],
    sights:[sight('姑婆山森林','guposhan','这条线的价值是住进森林、重复看晨昏，不需要每天换景点。')],
    sources:[source('姑婆山自然保护区','https://www.gxgpszrbhq.cn/')]
  },
  {
    id:'liancheng-local',name:'福建连城',category:'culture',mode:'no-car',batch:'earlier',hero:'guanzhishan',
    teaser:'冠豸山与培田古村，一半丹霞一半客家建筑。',intro:'利用广州往返连城的航班，在连城县域内玩四天。前两天看冠豸山与石门湖，后一天走培田古村，住宿不频繁更换。',
    transport:'广州往返连城冠豸山机场；县内约车或住宿接送，不租车。',stay:'连城县城或景区周边 3 晚',
    verdict:'山水与人文比例均衡，县域范围内移动压力不大。',watch:'冠豸山需考虑台阶与天气；培田班车班次有限，三人约车更稳。',
    budget:{transport:[3000,6200],local:[600,1200],lodging:[1300,2700],food:[1200,2100]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('连城机场',25.71,116.75,'flight'),pt('冠豸山',25.71,116.77),pt('培田古村',25.58,116.66),pt('连城机场',25.71,116.75),pt('广州',23.1291,113.2644,'flight')],
    days:[day('到连城','飞连城，在县城慢走与休息。','连城','guanzhishan'),day('冠豸山','走冠豸山主线，按体力决定是否加石门湖。','连城','guanzhishan'),day('培田古村','约车到培田，慢看古街、宗祠与民居。','连城','peitian'),day('返广州','上午留白，乘航班回广州。','返广州','peitian')],
    sights:[sight('冠豸山','guanzhishan','丹霞地貌与县城距离近，能留出充足时间慢走。'),sight('培田古村','peitian','客家宅院群是另一半主角，建筑爱好者值得花半天以上。')],
    sources:[source('冠豸山景区官网','https://www.lcxgzs.cn/index/index'),source('福建文旅厅：培田村','https://wlt.fujian.gov.cn/zwgk/ztzl/fjsjplyc/lyslcxptc/201908/t20190808_5294399.htm')]
  },
  {
    id:'kaiping-tangkou',name:'开平塘口',category:'culture',mode:'no-car',batch:'earlier',hero:'kaiping',
    teaser:'碉楼、稻田、侨乡村路，适合慢走与多停留。',intro:'高铁到开平后住塘口，在自力村与周边侨乡村落之间步行、骑行或短距离约车，重点是建筑与田野的关系。',
    transport:'广州南至开平南铁路；站到塘口约车，村落之间步行、骑行或约车。',stay:'塘口镇 3 晚',
    verdict:'世界遗产内容扎实，从广州出发交通成本较低。',watch:'四天只玩塘口节奏非常慢；不骑行时需要约车。',
    budget:{transport:[450,1100],local:[400,900],lodging:[1200,2600],food:[1200,2100]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('开平南',22.36,112.68,'train'),pt('塘口',22.36,112.62),pt('自力村',22.34,112.62),pt('塘口',22.36,112.62),pt('广州',23.1291,113.2644,'train')],
    days:[day('到侨乡','高铁到开平南，约车住塘口，傍晚看村路。','塘口','kaiping'),day('自力村','看碉楼与田野，安排一次讲解更有收获。','塘口','kaiping'),day('村落慢走','骑行或约车看塘口周边村落与咖啡馆。','塘口','kaiping'),day('返广州','早餐后回开平南站，铁路回广州。','返广州','kaiping')],
    sights:[sight('自力村碉楼群','kaiping','楼与稻田同框之外，更值得看侨民生活和建筑风格如何交织。')],
    sources:[source('广东省政府：开平碉楼','https://www.gd.gov.cn/gdywdt/zwzt/whlyhdzn/gddt/content/post_2535253.html'),source('江门市政府：自力村','https://www.jiangmen.gov.cn/newzjqx/lyzy/lyjd/dl/content/post_3545728.html')]
  },
  {
    id:'luokeng',name:'韶关曲江罗坑',category:'nature',mode:'self-drive',batch:'earlier',hero:'luokeng',
    teaser:'茶山与湖边草地，三晚同住一处的近程自驾。',intro:'从广州驾车到韶关曲江罗坑，在湖边和茶山之间安排轻徒步与休息。四天都住同一处，真正减少打包和换乘。',
    transport:'广州出发自驾，三人共用一车；山路以白天驾驶为主。',stay:'罗坑镇或湖区周边 3 晚',
    verdict:'路途适中，住稳后最容易获得松弛感。',watch:'湖边草地并非处处可露营或停靠；预订前核实住宿具体位置和进出道路。',
    budget:{transport:[700,1400],local:[100,300],lodging:[1500,3100],food:[1200,2100]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('韶关曲江',24.68,113.58),pt('罗坑镇',24.54,113.32),pt('罗坑湖区',24.55,113.29),pt('广州',23.1291,113.2644)],
    days:[day('开进罗坑','上午从广州出发，下午到湖区附近入住。','罗坑','luokeng'),day('茶山与村路','选一条轻松步道，下午喝茶和休息。','罗坑','luokeng'),day('湖畔留白','看湖边草地，天气好可在合规区域等待星空。','罗坑','luokeng'),day('回广州','早餐后返程，途中按需要休息。','返广州','luokeng')],
    sights:[sight('罗坑湖区','luokeng','风景主要来自湖、山与草地的整体气氛，适合不追求打卡点的旅行。')],
    sources:[source('罗坑草地景点资料','https://you.ctrip.com/sight/shaoguan222/1997691.html')]
  },
  {
    id:'lianshan',name:'清远连山太保镇',category:'nature',mode:'self-drive',batch:'earlier',hero:'lianshan',
    teaser:'十月梯田与壮瑶村落，广州直接开过去。',intro:'从广州开进连山太保镇，围绕欧家梯田与附近村落住三晚。早晚看田，白天走村，不需要连跑多个景区。',
    transport:'广州出发自驾，三人共用一车。',stay:'太保镇或欧家村附近 3 晚',
    verdict:'季节主题明确，适合想看稻田和山村生活的人。',watch:'稻田颜色与收割时间每年不同，出发前请向当地住宿确认田况。',
    budget:{transport:[900,1800],local:[100,300],lodging:[1300,2900],food:[1200,2100]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('连山',24.57,112.09),pt('太保镇',24.70,112.16),pt('欧家梯田',24.74144,112.18012),pt('广州',23.1291,113.2644)],
    days:[day('进连山','从广州开到连山太保镇，下午入住。','太保镇','lianshan'),day('看梯田','早晚看欧家梯田，中午回住处休息。','太保镇','lianshan'),day('壮瑶村路','选择附近村路散步，吃一顿农家饭。','太保镇','lianshan'),day('回广州','早餐后慢返广州。','返广州','lianshan')],
    sights:[sight('欧家梯田','lianshan','梯田围绕村落展开，晨昏比正午更有层次；丰收期也更有季节感。')],
    sources:[source('连山县政府：欧家梯田','https://www.gdls.gov.cn/zlls/xlls/jxls/content/post_1431803.html')]
  },
  {
    id:'shangbao',name:'赣州崇义上堡',category:'nature',mode:'self-drive',batch:'earlier',hero:'shangbao',
    teaser:'更深入的客家梯田与山村，路程最长也更沉浸。',intro:'广州自驾到赣南上堡梯田，三晚住山里。到达后减少移动，主要看不同光线下的梯田、村落与客家农耕景观。',
    transport:'广州出发自驾；往返路程较长，建议两人能轮换驾驶。',stay:'上堡乡附近 3 晚',
    verdict:'梯田规模和农耕文化都更突出，值得愿意多开车的人专程去。',watch:'单程车程是这 12 条里最长的一档；山路与稻田收割进度要提前问。',
    budget:{transport:[1200,2400],local:[100,350],lodging:[1300,3000],food:[1200,2200]},
    stops:[pt('广州',23.1291,113.2644,'start'),pt('崇义',25.68,114.31),pt('上堡梯田',25.66,113.98),pt('崇义',25.68,114.31),pt('广州',23.1291,113.2644)],
    days:[day('开往赣南','白天自驾到上堡，傍晚在住处附近看梯田。','上堡','shangbao'),day('看完整梯田','早晨与傍晚选两个观景点，中午休息。','上堡','shangbao'),day('走进村落','逛村路、看农耕景观，吃客家菜。','上堡','shangbao'),day('长途返程','早餐后返广州，途中安排充分休息。','返广州','shangbao')],
    sights:[sight('上堡梯田','shangbao','大面积梯田与客家农耕相连，值得住下来等晨雾或夕光。')],
    sources:[source('赣州市政府：上堡梯田','https://www.ganzhou.gov.cn/zfxxgk/c144214/202211/16266a465c4c4ce9a13c684885184fd0.shtml'),source('农业农村部：农业文化遗产','https://jgs.agri.gov.cn/detail/zh/16197.html')]
  }
];

export const getBudgetTotal = (route) => Object.values(route.budget).reduce((sum, range) => [sum[0] + range[0], sum[1] + range[1]], [0, 0]);
export const formatMoney = (value) => new Intl.NumberFormat('zh-CN').format(Math.round(value));
