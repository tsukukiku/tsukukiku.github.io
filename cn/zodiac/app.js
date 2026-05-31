const UI = {
  title: "星座月运势",
  sub: "Horoscope Analysis",
  lead: "选择年份、月份，再点击星座图标查看五项重点运势。",
  year: "年份",
  month: "月份",
  choose: "选择星座",
  card: "精美运势解说卡",
  hint: "点击按钮，可显示此星座本月的运势图片。",
  draw: "抽卡",
  unavailable: "暂无抽卡图",
  pending: "编写中，请稍候",
  close: "关闭",
  download: "下载图片",
  categories: ["核心主题", "工作 / 学习", "感情 / 家庭", "财运", "健康"],
  months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  pendingTitle: "运势内容",
  error: "未找到对应运势图，请确认图片已放入月份文件夹。"
};

const SIGNS = [
  { id: "aries", name: "白羊座", english: "Aries", symbol: "♈", date: "3月21日 - 4月19日", element: "火" },
  { id: "taurus", name: "金牛座", english: "Taurus", symbol: "♉", date: "4月20日 - 5月20日", element: "土" },
  { id: "gemini", name: "双子座", english: "Gemini", symbol: "♊", date: "5月21日 - 6月21日", element: "风" },
  { id: "cancer", name: "巨蟹座", english: "Cancer", symbol: "♋", date: "6月21日 - 7月22日", element: "水" },
  { id: "leo", name: "狮子座", english: "Leo", symbol: "♌", date: "7月23日 - 8月22日", element: "火" },
  { id: "virgo", name: "处女座", english: "Virgo", symbol: "♍", date: "8月23日 - 9月22日", element: "土" },
  { id: "libra", name: "天秤座", english: "Libra", symbol: "♎", date: "9月23日 - 10月22日", element: "风" },
  { id: "scorpio", name: "天蝎座", english: "Scorpio", symbol: "♏", date: "10月23日 - 11月21日", element: "水" },
  { id: "sagittarius", name: "射手座", english: "Sagittarius", symbol: "♐", date: "11月22日 - 12月21日", element: "火" },
  { id: "capricorn", name: "摩羯座", english: "Capricorn", symbol: "♑", date: "12月22日 - 1月19日", element: "土" },
  { id: "aquarius", name: "水瓶座", english: "Aquarius", symbol: "♒", date: "1月20日 - 2月18日", element: "风" },
  { id: "pisces", name: "双鱼座", english: "Pisces", symbol: "♓", date: "2月19日 - 3月20日", element: "水" }
];

const CARD_PREFIX = "cn-";
const CARD_FILES = {
  "2026-03": {
    aries: "202603aries.png",
    taurus: "202603taurus.png",
    gemini: "202603gemini.png",
    cancer: "202603cancer.png",
    leo: "202603leo.png",
    virgo: "202603virgo.png",
    libra: "202603libra.png",
    scorpio: "202603scorpio.png",
    sagittarius: "202603sagittarius.png",
    capricorn: "202603capricorn.png",
    pisces: "202603pisces.png"
  },
  "2026-04": {
    aries: "aries.png",
    taurus: "taurus.png",
    gemini: "gemini.png",
    cancer: "cancer.png",
    leo: "leo.png",
    virgo: "virgo.png",
    libra: "libra.png",
    scorpio: "scorpio.png",
    sagittarius: "sagittarius.png",
    capricorn: "capricorn.png",
    aquarius: "aquarius.png",
    pisces: "pisces.png"
  },
  "2026-05": {
    aquarius: "202605aquarius-3k6.png",
    aries: "202605aries-Ruk.png",
    cancer: "202605cancer-btI.png",
    capricorn: "202605capricorn-6iH.png",
    gemini: "202605gemini-cAX.png",
    leo: "202605leo-oTh.png",
    libra: "202605libra-7Aj.png",
    pisces: "202605pisces-96t.png",
    sagittarius: "202605sagittarius-FqL.png",
    scorpio: "202605scorpio-YN6.png",
    taurus: "202605taurus-DFX.png",
    virgo: "202605virgo-kvP.png"
  },
  "2026-06": {
    aquarius: "202606aquarius-june.png",
    aries: "202606aries-june.png",
    cancer: "202606cancer-june.png",
    capricorn: "202606capricorn-june.png",
    gemini: "202606gemini-june.png",
    leo: "202606leo-june.png",
    libra: "202606libra-june.png",
    pisces: "202606pisces-june.png",
    sagittarius: "202606sagittarius-june.png",
    scorpio: "202606scorpio-june.png",
    taurus: "202606taurus-june.png",
    virgo: "202606virgo-june.png"
  }
};

const READINGS = {
  "2026-02": {
    overview: {
      title: "2026年2月十二星座运势",
      text: "本月关注内在重塑与界限重建。能量从水瓶座的思辨冷静过渡到双鱼座的温柔感性，重点在于回顾旧模式、修复关系，并为下半年的成长设下心理基础。"
    },
    conclusion: {
      title: "总结寄语",
      text: "二月适合放慢节奏，处理内心和关系里的旧课题。越能清楚设限，越能让之后的行动更稳。"
    },
    aries: {
      theme: "能量回流与深度疗愈 (Deep Healing & Reconnection)。",
      work: "需学会放慢脚步，将初期的冲劲导向深入学习或自我理解。合作关系方面，重点在于稳定和长期规划，而非盲目开创。",
      love: "感情回归私密与情感联结。本月需要关注内在的渴望，不要被外在的表象所迷惑。",
      money: "适宜进行需要深度研究的投资，而非快进式的投机。理财策略需结合情感层面的稳定感来做决策。",
      health: "注意过度消耗精力，情绪起伏大时容易透支。保持规律的作息，给心智留出休息的缓冲空间。"
    },
    taurus: {
      theme: "稳定升级与价值重估 (Stabilization & Revaluation)。",
      work: "工作上处于关键的里程碑阶段，能获得肯定。重点在于将过往积累的经验，转化为具象化的成果与制度。",
      love: "情感关系进入需要深度沟通的阶段，需要清晰地处理未解决的“疙瘩”，沟通的关键在于展现公平感和长期共同设想。",
      money: "财务上机会稳定，但成功依赖于你是否敢于在合作和投入上“小试牛刀”，接受适度风险。",
      health: "关注身心平衡，避免因过度思虑或工作压力导致身心俱疲。"
    },
    gemini: {
      theme: "思想交汇与多维启动 (Idea Convergence & Multi-tasking)。",
      work: "思维敏锐度极高，是极佳的学习和交流期。适合拓展人脉、研究新领域，甚至考虑转型的蓝图规划。",
      love: "关系中充盈着思辨和互动。需要明确关系中的“期待边界”，才能将暧昧发展为稳定的合作或亲密。",
      money: "财务上机会点多，收入来源可能来自多元化的信息或知识输出。但务必将所有期待写下来，避免信息差导致误会。",
      health: "注意思绪切换过快导致精神内耗。需要设置流程和节奏，让思绪有一个固定的停靠点。"
    },
    cancer: {
      theme: "情感深潜与根基修复 (Emotional Depth & Foundation Repair)。",
      work: "极度适合进行自我分析和回顾。在职场上，需警惕被情感因素干扰客观判断，重点处理收尾和合规事务。",
      love: "情感课题成为核心焦点，是修复内在创伤、与家人和解的良机。需要勇敢直面并说出那些一直隐藏的情绪。",
      money: "财运与安全感挂钩。处理财务宜关注已过期账单、合约细节，积攒信任感才是最大财富。",
      health: "留意情绪化的消耗。推荐进行冥想、沉浸式放松活动，让内心平静成为第一优先。"
    },
    leo: {
      theme: "舞台重塑与自我展示 (Stage Redefinition & Self-Expression)。",
      work: "存在被关注和展示的冲动，非常适合接受新挑战或承担需要曝光度的项目。这是展现领导力和创造力的绝佳时刻。",
      love: "渴望被看见、被欣赏。关系发展更倾向于戏剧化和高光时刻，需将焦点能量用在经营深度而非炫耀广度上。",
      money: "财务机会源于人脉引荐或舞台曝光。敢于将自己的能力和光环化为可以变现的资源。",
      health: "警惕因表现欲过强导致过度兴奋和精神亢奋。保持适度退场和休息时间。"
    },
    virgo: {
      theme: "规律重建与边界设定 (Routine Building & Setting Boundaries)。",
      work: "焦点完全回归到细节优化和流程建立。是清理工作环境、优化生活系统、建立长期技能壁垒的最佳时机。",
      love: "关系进入责任检验期，需要更清晰的定义。不要事事扮演完美修复者，学会要求并接受对方的清晰界限。",
      money: "财务规划非常务实，适合进行资产盘点、清算和结构优化，将浪费转化为盈余。",
      health: "关键提醒是过度思虑导致焦虑。请强迫自己进行结构化放松，例如规律散步、阅读，而不是无目的刷手机。"
    },
    libra: {
      theme: "和解修复与人际平衡 (Reconciliation & Harmony Restoration)。",
      work: "社交和合作的重要性空前提升。容易处理棘手的人际矛盾，但不要为了维持表面和平而牺牲自己的核心利益。",
      love: "关系中需要学会松手和放权。不要总是做那个维系者，学会在关键时刻优雅退让或引导对方，而非全盘接管。",
      money: "财运稳定，但投资决策容易受情绪波动影响。决策时务必加入第三方的、客观的制衡意见。",
      health: "精神层面的过度付出容易导致内耗。学会用更自我中心的方式照顾自己，而不是通过取悦他人获得心理安慰。"
    },
    scorpio: {
      theme: "深度隐私与情感重审 (Deep Dive & Private Review)。",
      work: "课题聚焦于根基和幕后。适合研究、侦查性工作或深入挖掘底层逻辑。在职场中要警惕信息泄露，保护核心价值。",
      love: "情感进入重审期，不排除旧情重燃或被压抑的家族议题浮现。需要洞察哪些是缘分，哪些是执念。",
      money: "财运提升与你揭开的真相或解决的阴谋挂钩。财务管理上需要警惕隐形支出和看不见的债务。",
      health: "情绪释放和深度挖掘可能带来身心疲惫。深度排毒，无论情绪、身体还是精神，都是本月主题。"
    },
    sagittarius: {
      theme: "表达觉醒与格局开阔 (Expressive Awakening & Broadening Vision)。",
      work: "开口是最大的能量。适合演讲、教学、跨界交流。视野开阔，能从不同文化与学识中汲取灵感并落地行动。",
      love: "情感上需要扩大格局，跳脱过时的相处模式，用更广阔的视角看待亲密关系。",
      money: "财运和远方、视野有关。可以拓展新的收入渠道，或将个人知识体系化输出，实现价值延伸。",
      health: "需警惕精神过载。思考很多、输出很多，但要注意脚踏实地休息，让身体节奏匹配思绪广度。"
    },
    capricorn: {
      theme: "现实承载与结构落地 (Tangible Reality & Structure Building)。",
      work: "权威感回归，责任和目标感极强。本月会强力推动将概念转化为可执行、有时间节点的计划，适合晋升与长期事业蓝图。",
      love: "情感关系进入现实测试期。浪漫想象必须让位于现实承诺和责任，相处核心是共同构建的未来蓝图。",
      money: "财运目标明确，适合处理房产、固定资产或长期股权事务。责任心会直接转化为财富稳定增长。",
      health: "最大风险是过度劳累和自我苛责。再宏伟的蓝图，也需要一个健康的载体，也就是你本身。"
    },
    aquarius: {
      theme: "创新前瞻与理念革新 (Innovation & Conceptual Leap)。",
      work: "充分展示前瞻性思维和独特性，这是发挥创意和建立社群影响力的高光期。挑战是平衡前卫想法与现实执行。",
      love: "情感上渴望灵魂层面的联结，超脱世俗标签。适合和有共同理想、精神层面的伙伴发展关系。",
      money: "财运可能来自前沿科技、社群项目或创新思维的商业化。保持客观看待，不被眼前诱惑冲昏头脑。",
      health: "易陷入思虑过度和脱离现实的状态。建议通过运动或动手项目，将抽象想法具体化，平复心绪。"
    },
    pisces: {
      theme: "疗愈接纳与直觉信任 (Empathy & Trusting Intuition)。",
      work: "灵性直觉和共情力达到顶峰，能感受到很多人的未说出口的需求。适合艺术、咨询或关怀行业，但避免被情绪拉扯而决策。",
      love: "极度敏感和包容，情感连接需求达到顶峰。是自我和解、与过去和好、重新定义什么是爱的月份。",
      money: "财运平稳，偏向非物质价值回报，如精神满足、学识积累。重大投资需谨慎，避免过度相信直觉而非数据。",
      health: "最容易为别人而活，忽略自身需求。本月最大任务是学会为自己设限，并温柔拒绝不合理要求。"
    }
  },
  "2026-03": {
    overview: {
      title: "2026年3月十二星座运势",
      text: "三月强调行动、沟通、秩序与内在修正。不同星座会在开创、关系、责任或精神连接上迎来阶段性推进。"
    },
    conclusion: {
      title: "总结寄语",
      text: "三月适合把能量用在清晰行动上。先看见自己的节奏，再决定要冲刺、修正还是休息。"
    },
    aries: {
      theme: "开创与行动力爆发 (Energy Field: Action & Pioneering)。",
      work: "能量充沛，非常适合主动出击，是启动新项目和争取机会的最佳时期。适合将想法付诸实践，但需先谋划再行动。",
      love: "社交魅力极强，容易吸引目光。单身者机遇多，勇敢迈出第一步；有伴侣者需注意沟通方式，避免冲动言语影响关系。",
      money: "财运看重的是行动的成果。适合开拓性投资，但投资前务必做好风险评估，切忌盲目跟风。",
      health: "活力强劲，但需警惕过度透支精力。建议保持充足休息和冷静思维，避免急躁导致过劳问题。"
    },
    taurus: {
      theme: "务实积累与价值落地 (Energy Field: Stability & Manifestation)。",
      work: "稳定性和耐力是最大优势。工作上适合深耕细作、完善细节，靠稳扎稳打获得认可，也可适当学习新技能。",
      love: "情感需求稳定，需要物质和安全感的双重确认。居家时间增多，适合与家人深度沟通，化解误会。",
      money: "财运稳健，适合积累性投资，如不动产或品牌价值。不宜高风险投机，抓住实在的收入机会。",
      health: "注意消化系统和足部健康。保持规律饮食和散步活动，让身体根基更扎实。"
    },
    gemini: {
      theme: "信息链接与思潮交汇 (Energy Field: Connection & Communication)。",
      work: "沟通能力达到顶峰，将是团队中的信息枢纽。适合大量信息整合、演讲或多方协调，多方交流能带来新思路。",
      love: "感情生活丰富多彩，但心神容易被太多想法牵扯，需要聚焦核心对象。与家人沟通时注意表达清晰。",
      money: "财运来源广，适合通过信息差、销售或口才技能变现。但需注意信息筛选，避免分散注意力错失时机。",
      health: "容易思虑过度，导致神经系统紧张。建议学习能占据精神高度的新爱好，疏导过剩脑力。"
    },
    cancer: {
      theme: "情感滋养与自我庇护 (Energy Field: Nurturing & Security)。",
      work: "工作重心回归到归属感和安全感的构建上。适合与团队建立情感连接、参与社群项目，扮演支持角色。",
      love: "情绪饱满，家庭和情感是最大能量来源。家人需求会成为首要关注点，也要照顾好自己。",
      money: "财运与依靠的群体相关。适合继承、合作或共同投资的稳健项目，靠信任建立财富壁垒。",
      health: "情绪波动较大时，容易影响脾胃和睡眠。保持情绪稳定和规律作息是重要健康任务。"
    },
    leo: {
      theme: "自我展现与舞台焦点 (Energy Field: Recognition & Spotlight)。",
      work: "你的光芒会得到高度认可，是展现领导力、展示个人才华的最佳时机。适合担任核心角色，引领项目走向公开舞台。",
      love: "渴望被看见和赞赏。单身者容易吸引追求者；有伴侣者需注意过度自我中心可能让伴侣感到压力。",
      money: "财运来自影响力和名声。如果能将专业形象包装得足够出色，将迎来不错进账。",
      health: "容易因过分关注外界评价而消耗心力。记得享受独处时间，不为掌声过度消耗体能。"
    },
    virgo: {
      theme: "系统优化与完美执行 (Energy Field: Analysis & Refinement)。",
      work: "分析能力和条理性达到高峰。无论流程优化、知识整理还是计划打磨，都能发挥不可替代的作用。",
      love: "在感情中倾向于服务和改进，会为伴侣或家人解决问题。但不要将完美主义带到感情中。",
      money: "财运稳定，适合靠专业技能变现。对财务细节把控要求极高，需要建立完善的财务系统。",
      health: "容易过度工作和挑剔自己及环境。必须有意识地放过自己，把精力从纠错转向放松。"
    },
    libra: {
      theme: "平衡协调与人际平衡 (Energy Field: Harmony & Relationship)。",
      work: "处于人际关系网络的核心位置。擅长调解冲突、平衡各方意见，但做决定时可能因顾虑太多而犹豫。",
      love: "关系是主题，会努力维系和睦。单身者容易被有吸引力的群体吸引；有伴侣者需主动打破僵局。",
      money: "财富获取与合作和关系网络紧密挂钩。合作项目或人际引荐能带来机会，但决策需要更果断。",
      health: "容易因过分在意他人看法而疲惫。学会说“不”，是三月最大的健康课题。"
    },
    scorpio: {
      theme: "深刻洞察与蜕变重生 (Energy Field: Transformation & Depth)。",
      work: "直觉和洞察力超强，适合研究幕后真相、调查性工作或心理学领域。能看到本质，但需小心信息带来的权力感。",
      love: "情感深度被激发，关系趋于深刻或面临重大考验。需要面对隐藏真相，并迎来一次清理过程。",
      money: "财运和资源整合挂钩。适合与资源雄厚者合作，或进行高价值服务性交易，不适合浅尝辄止的投资。",
      health: "注意情绪积压和爆发。压力会堆积在身体隐秘部位，健康释放强烈感受至关重要。"
    },
    sagittarius: {
      theme: "探索边界与信念拓展 (Energy Field: Exploration & Philosophy)。",
      work: "渴望知识广度和自由探索。适合跨文化交流、旅行相关工作或需要宏大愿景的项目。思维越跳脱，视野越开阔。",
      love: "感情需要精神共鸣而非单纯陪伴。与伴侣分享更广阔的世界观和人生哲学，关系才能持续升温。",
      money: "财运来源于知识传递和远方机会。不要局限眼前范围，多关注全球视野和长期趋势。",
      health: "容易因精神飞翔而忽略身体基础需求，特别是腿脚和脊柱。旅行和户外活动是好的调理方式。"
    },
    capricorn: {
      theme: "责任扛肩与系统构建 (Energy Field: Discipline & Structure)。",
      work: "事业心达到顶峰，责任感极强。适合将抱负和规划落地为可执行阶梯，建立可信赖的职业声誉。",
      love: "责任感可能让你忽略浪漫需求。需要为伴侣和家人留出不设 KPI 的情感空间，学会柔软地爱。",
      money: "极佳的财运期，只要坚持纪律和长远规划，财富会稳健而不可阻挡地积累。",
      health: "容易给自己设定过高目标，造成身心俱疲。学会接受暂时的不完美，给自己一个非工作日假。"
    },
    aquarius: {
      theme: "集体的蓝图与未来愿景 (Energy Field: Innovation & Community)。",
      work: "你将是思想的引领者。适合参与公益项目、技术前沿研究或集体智慧平台搭建，独特视角能点燃团队灵感。",
      love: "情感表达倾向理性分析，有时显得超脱。需要找到理解你思维广度、欣赏你独特性的伴侣。",
      money: "财运来源于创新模型或团体项目分成。适合参与概念验证类投资或与科技领域的人合作。",
      health: "精神层面活跃，容易过度思考和焦虑。多进行冥想、瑜伽等让思绪回落当下的活动。"
    },
    pisces: {
      theme: "共情疗愈与精神连接 (Energy Field: Intuition & Empathy)。",
      work: "直觉和同理心是最大财富。适合人文关怀、艺术指导、心理咨询或跨界融合领域，直觉比逻辑更可靠。",
      love: "情感共鸣极强，能感受到深层连接。对伴侣奉献心高，但处理界限时要小心，别吸收过多情绪负担。",
      money: "财运往往与精神服务或幕后创意相关。适合靠艺术才华、人脉情感支持带来稳定收入流。",
      health: "极易受情绪影响而出现身体症状。规律作息、艺术熏陶和冥想，是保持身心平衡的关键。"
    }
  },
  "2026-04": {
    overview: {
      title: "2026年4月十二星座运势",
      text: "四月强调行动、稳定、社交、家庭与自我修正。能量更偏向将状态拉回现实，把想法变成具体选择。"
    },
    conclusion: {
      title: "总结寄语",
      text: "四月适合看清自己的优势，也整理自己的节奏。别急着求快，真正的推进来自持续和稳定。"
    },
    aries: {
      theme: "突破、开创、展现自我（Energy Field: Action & Pioneering）。",
      work: "能量充沛，非常适合主动出击，是启动新项目和争取机会的最佳时期。适合将想法付诸实践，但需避免草率判断。",
      love: "社交魅力极强，很容易在社交场合吸引目光。单身者机遇多，有伴侣者需要注意沟通方式，避免冲动引发口舌。",
      money: "适合开拓性投资或需要高度主动性的收入渠道。财运看重的是行动的成果。",
      health: "活力强，但容易过度透支精力。需提醒自己保持冷静思考，避免盲目拼搏。"
    },
    taurus: {
      theme: "稳定、积累、追求内在的品质感与安全感（Stability & Quality）。",
      work: "生活步调会变得稳定有规律，非常适合打磨技能和积累口碑。工作成就来源于持续耐心投入，不宜急于求成。",
      love: "关系趋于稳定，强调一起建立可见的共同生活基础，能带来深层安全感。",
      money: "财运表现稳健，属于积少成多的类型。适合稳健理财规划，与技能提升相关的收入会明显改善。",
      health: "整体平稳，注意精神层面的放松，适当享受生活品质能让身心更加平衡。"
    },
    gemini: {
      theme: "社交能量爆发、人际连接、信息拓展（Communication & Connection）。",
      work: "非常适合沟通、谈判和跨界合作。信息获取速度极快，创意点子多，是建立人脉和知识网络的好时机。",
      love: "社交场合会非常引人注目，是单身人士容易遇到心动对象的时期。但过度信息摄入也可能带来思虑过重。",
      money: "收入来源多元化，但钱财积累需要时间沉淀，不适合进行高风险短期投机。",
      health: "易受信息流和过度社交影响，保持放空和放慢节奏，对身心是最好的调养。"
    },
    cancer: {
      theme: "回归本源，重建安全感，关注家庭与根基（Nesting & Roots）。",
      work: "适合处理与根基、历史、根源相关的工作，如企划、历史研究或团队协作中的角色确认。",
      love: "家庭和情感连接是月度最大的能量场。适合与家人深度沟通，重建情感联结。",
      money: "财运的稳定度提升，更侧重于持续性和可预期性的收入来源。",
      health: "需提防因家庭或工作责任过重而导致身心疲劳，学习放权很重要。"
    },
    leo: {
      theme: "聚焦个人光芒，展现领导力，并追求舞台中心的位置（Spotlight & Leadership）。",
      work: "职场上极具表现力和说服力，容易获得关注和领导机会。适合做需要展示个人权威性的项目。",
      love: "魅力达到巅峰，身边人会感受到你的光芒。但需注意，过强自我展现偶尔会带来人际冲突和压力。",
      money: "财运整体看好，阶段性提升机会较多，特别是与个人品牌和权威相关的领域。",
      health: "状态很好，但需要学会适时收敛光芒，给身心留出喘息和沉淀空间。"
    },
    virgo: {
      theme: "细节打磨、精益求精、自我修正（Refinement & Service）。",
      work: "逻辑能力和执行力最强。非常适合需要深度优化、流程梳理和细节检查的岗位。",
      love: "关系会进入考验现实问题的阶段，需要理性沟通，不宜过度挑剔。",
      money: "财务上需尤其谨慎，任何涉及他人资源或资金的环节，都要反复核对确认，防范疏忽造成损失。",
      health: "建议通过规律运动或环境整理来疏导焦虑，保持身心秩序。"
    },
    libra: {
      theme: "平衡重建、关系重组、寻找和谐的秩序感（Rebalancing & Harmony）。",
      work: "职场人脉关系和合作模式是重点。与人打交道的工作都需要重新评估平衡点，沟通能力是最大助力。",
      love: "情感关系将经历深刻调整期，需要打破过去的妥协模式，明确自己对关系的要求，寻找心灵契合度。",
      money: "财运提升点在于人脉和合作，财源稳定，关键在于学会平衡付出与回报的价值。",
      health: "关注身心和环境的和谐感，通过艺术、美学或维护生活秩序达到最佳状态。"
    },
    scorpio: {
      theme: "深度挖掘、聚焦目标、能量的集中爆发（Introspection & Focus）。",
      work: "执行力极强，适合深入挖掘一个问题直到彻底解决，擅长处理别人回避的深层、复杂议题。",
      love: "感情议题会非常深入，涉及信任、界限和未来规划，关系将变得更成熟和务实。",
      money: "财运提升往往与突破性、深层次资源获取有关，能快速解决财务上的难题。",
      health: "容易因为过度专注目标而忽略身体细微警报，需要刻意安排放松时间。"
    },
    sagittarius: {
      theme: "探索、自由、格局提升，将想法具象化（Exploration & Expansion）。",
      work: "灵感和学习动力十足，极利于跨界学习、拓展知识边界，职业方向和副业探索会带来惊喜。",
      love: "感情生活充满乐趣和探索欲，适合探索更广阔的精神层面，不宜过于沉溺于感官享受。",
      money: "财运来源于变动和开拓，容易有意外奖金或来自远方、新领域的进账。",
      health: "整体状态积极外向，但需维持稳定生活节奏，避免想法太多而分散精力。"
    },
    capricorn: {
      theme: "稳健积累、责任担当、脚踏实地（Responsibility & Structure）。",
      work: "这是一个回报期，前期积累和忍耐力会得到体现，有利于争取有实权、有稳定性的职位或长期项目。",
      love: "关系趋向于建立共同的未来结构，适合讨论长远规划，如购房或职业规划结合。",
      money: "稳步上升，偏向通过系统化、制度化方式获取的稳定收入，这是最大的助力。",
      health: "压力来源于责任感，要学会将工作与休息明确切割，才能让身体持续支持长期目标。"
    },
    aquarius: {
      theme: "创新、集体、超脱，思维的爆发点（Innovation & Community）。",
      work: "极度利于前沿技术、团队合作和具有社会意义的项目。你的独特思维模式是最大价值输出点。",
      love: "关系层面追求精神上的自由度和思想上的共鸣，需要保持一定个体空间。",
      money: "财富增长点可能来自科技、互联网或社区协作类项目，思维输出可以直接变现。",
      health: "精神层面的兴奋感可能导致生理忽略，保持规律作息和运动至关重要。"
    },
    pisces: {
      theme: "疗愈、回归内心、精神的蜕变（Healing & Intuition）。",
      work: "适合需要共情能力、艺术感或服务性质的工作。重点在于将内心感悟转化成可被他人理解和利用的成果。",
      love: "情感层面的深度联结非常重要，容易与灵魂伴侣产生共鸣，但也容易因感性产生不切实际的幻想。",
      money: "财运提升与精神价值的变现有关，比如咨询、创作、艺术品等。",
      health: "整体倾向于情绪波动，需要通过冥想、艺术或亲近自然的方式锚定心神。"
    }
  },
  "2026-05": {
    overview: {
      title: "2026年5月十二星座运势",
      text: "五月的主题是从思想到结构，从激情到稳定。请把能量聚焦到能形成实体、能被记录、能被稳定维护的成果上。"
    },
    conclusion: {
      title: "总结寄语",
      text: "带着审慎的眼光评估目前所有的热情点，把理念转化为结构，把行动导向可持续的稳定。"
    },
    aries: {
      theme: "焦点收束与行动承接 (Focus Convergence & Implementing Action)。",
      work: "你的开创精神依然在线，但比起年初的“抢跑”，五月更强调“如何落地”。适合将前期设定的宏大目标，拆解成可执行的、有明确时间节点的项目组。",
      love: "感情的探索将更加务实。激情退去后，你会开始思考“长期共同生活的蓝图”，对安全感和确定性需求增加。",
      money: "财运的稳定期到来。需要依据已建立的“流程”和“规则”来理财，任何突发性的高风险投资都需要重新进行风险评估。",
      health: "宜将过剩的精力导向可量化的、需要耐心的爱好（如户外徒步、园艺），让身体的“稳定节奏”来对抗思维的“冲刺欲”。"
    },
    taurus: {
      theme: "价值的具象化与稳定收获 (Materializing Value & Solid Gains)。",
      work: "你的专业能力和可靠性在本月达到顶峰。工作上的成果会非常扎实，容易获得来自系统层面的肯定或晋升。",
      love: "关系的核心议题会落在“责任”与“稳定价值”上。共同建立的家庭基石或共同的物质目标，会成为维系感情的关键锚点。",
      money: "这是财运最为稳定的时期之一。理财决策可大胆执行，重点关注能带来实体回报的项目，耐心和积累是最好的财富密码。",
      health: "身体和物质的连接非常重要。建议增加与大地、自然接触的活动，让身心联结达到最佳和谐点。"
    },
    gemini: {
      theme: "知识的整合与沟通的精炼 (Knowledge Synthesis & Precise Communication)。",
      work: "你的信息处理能力依然极强，但重点从“广度探索”转向“深度总结”。适合撰写报告、编写手册、或做跨领域的知识整合分享。",
      love: "关系需要更少的“猜测”和更多的“白纸黑字”。清晰的沟通界限和共同的认知，比情绪上的波动更重要。",
      money: "适合通过知识付费、撰写内容或做顾问输出来变现。你的“信息网络”是最好的赚钱工具，务必系统化你的知识点。",
      health: "精神活动旺盛，容易造成信息超载。建议定期“断网排毒”，强制自己放慢语速，让大脑也学会休息。"
    },
    cancer: {
      theme: "情感基石的建立与庇护 (Building Emotional Shelter & Nurturing Roots)。",
      work: "职场上的支持与归属感成为动力。你更愿意在一个“有烟火气”、“有家人感”的环境中工作。适合回归幕后支持、行政或需要高度共情力的岗位。",
      love: "家庭和归属感是五月最大的能量来源。情感需求会变得更趋向“安全港湾”，任何能带来归属感的互动，都极具疗愈性。",
      money: "财运与“人脉信任圈”息息相关。处理金钱时，倾向于为家庭或亲近的人设立“保护基金”或“备用金”。",
      health: "关注情绪的起伏对身体的影响。多通过烹饪、照顾环境（如室内绿植）等行为来释放和稳定情绪张力。"
    },
    leo: {
      theme: "荣耀的展示与格局的提升 (Visibility & Elevated Status)。",
      work: "你的存在感极强，适合需要走台前、做公开演讲或承担核心汇报的场合。这份被肯定的能量，会助推你完成一次事业上的“升级展示”。",
      love: "在感情中，你渴望的是被欣赏和认可的“独特光芒”。伴侣关系中，适度的赞美和焦点聚焦，能让关系充满仪式感。",
      money: "财运的增长点在于“名望加成”。你的专业形象越光彩，能吸引来的资源和合作机会就越大。",
      health: "需注意“焦点过大”带来的骄傲感，避免因为过于关注外在赞美而忽略了内在的细节调整。偶尔的低调，反而能积蓄更强的能量。"
    },
    virgo: {
      theme: "流程的精修与细节的掌控 (System Refinement & Detail Mastery)。",
      work: "这是发挥你“流程优化师”天赋的完美时机。对工作流程、数据准确性有近乎偏执的关注，能将混乱的系统，打磨得井井有条。",
      love: "倾向于用“服务”和“解决问题”的方式来表达爱意。关系中的小习惯、小细节，会成为衡量亲密感的关键指标。",
      money: "财运表现极度理性，每一笔开支都伴随着清晰的成本效益分析。适合做账目核对、精细化预算管理，确保每一分钱的去向合理且有效。",
      health: "容易过度“帮人忙”或过度分析自己的身体信号。学会在“帮助别人”和“照顾自己”之间，划出一条明确的、无需内疚的界限。"
    },
    libra: {
      theme: "和谐的重建与关系法则的重置 (Rebuilding Harmony & Defining Relationship Rules)。",
      work: "协调能力达到巅峰，非常适合充当项目组的“调解人”。但要注意，在权衡利弊时，不要为了所谓的“平衡”而损害了自身的核心价值。",
      love: "关系进入“重新定义”阶段。比起平稳，你们更需要一起明确“这段关系最不容妥协的底线”是什么。找到共同的价值锚点。",
      money: "财运与人际的“公平性”成正比。投资或合作协议，一定要在利益分配上做到公开透明，避免私下让步。",
      health: "精神上的过度平衡会造成“能量涣散”。偶尔需要主动打破平衡，让自己处于一个不完美但真实的状态，才能获得更持久的放松。"
    },
    scorpio: {
      theme: "深入挖掘与权力掌控 (Deep Excavation & Mastering Control)。",
      work: "挖掘到深层的商业模式和人性动机，具有极强的穿透力。适合处理需要高度机密性、需要彻底“盘清”的重大项目。",
      love: "情感层面的深度探索，直面彼此最深层的情结和不安全感。关系会进入一个需要“信任重建”的密室状态。",
      money: "财运爆发点来自于信息的垄断性获取。你对某个领域的深度研究和私密渠道，能带来超预期的财富回流。",
      health: "极易因思虑过深而形成“精神内耗”。定期进行冥想或深层咨询，将挖掘的能量导向心智的自我疗愈，而非对外部的控制欲。"
    },
    sagittarius: {
      theme: "视野的开阔与真理的表达 (Broadened Perspective & Sharing Truth)。",
      work: "你的能量非常适合出海、跨文化交流、或成为某一领域的“思想布道者”。视野的拓展将直接转化为可执行的方案。",
      love: "情感上，追求的是“精神共鸣”和“共同成长的旅程”。需要与能一起探索未知、一起成长的灵魂连接。",
      money: "财运的增长点来自“远方思维”和“教育输出”。可以考虑将个人认知系统化，出售你的“人生经验包”。",
      health: "过于乐观和探索，可能会忽略现实中的身体信号。建议将长途跋涉的精力，转化为规律的运动，让脚步匹配思绪的宏大。"
    },
    capricorn: {
      theme: "责任的兑现与结构化权威 (Fulfilling Duty & Establishing Authority)。",
      work: "你的专业度和规划性会让你在职场占据领导地位。一切建立在清晰的、可问责的“里程碑”之上，你的努力将得到制度化的回报。",
      love: "感情的承诺会变得非常“制度化”，倾向于讨论共同的未来规划、财务蓝图或社会角色定位。爱是建立在共同的责任感之上的。",
      money: "财务规划严谨且有远见，适合进行需要时间和信誉度积累的大型投资或资产配置。",
      health: "最大的挑战是“完美主义带来的自我惩罚”。提醒自己，在流程和结构之外，也要给心灵留出犯错和休息的空间。"
    },
    aquarius: {
      theme: "群体共振与理念的突破 (Collective Resonance & Paradigm Shift)。",
      work: "你的集体智慧和创新概念将成为焦点。最适合参与需要跨界协作、需要打破既有行业思维的项目，成为“改变规则的玩家”。",
      love: "情感上，你渴望的不是传统的亲密，而是“理念上的共鸣”。能与你一同进化、一起探索未知的朋友，才是最亲近的盟友。",
      money: "财运来自于前瞻性视野和社群的资源整合。提前布局网络，抓住群体的共识点，实现价值爆发。",
      health: "易脱离现实，将注意力全放在“宏大叙事”上。需要定期进行接地气的体验（如亲近大自然），将脑力的电波重新导入身体的频率。"
    },
    pisces: {
      theme: "共情能力的实践与界限的温柔划定 (Practicing Empathy & Gentle Boundary Setting)。",
      work: "极强的艺术直觉和共情力是你的超能力。适合咨询、创意或需要高度共情力的领域。但要注意，不要让这份“治愈力”变成“精神内耗”的工具。",
      love: "情感流动性极强，包容心满溢。你需要学习区分“我愿意接纳的爱”，和“我必须承担的责任”。爱自己，先做最温柔的决定。",
      money: "财富更多源于“无形的价值”，如作品、创意、或帮助他人感受到治愈。但投资时，务必将直觉结论与硬性数据进行交叉验证，警惕“美好的幻想”带来财务风险。",
      health: "这是本月需要特别注意的。因为吸收了太多外部的情绪，精神和情绪系统容易超载。任何时候感到无力，请允许自己“空转”，无需强求答案。"
    }
  },
  "2026-06": {
    overview: {
      title: "2026年6月十二星座运势",
      text: "六月的能量从上半年的积累转向整合与推进。适合把想法落地、把关系讲清楚，也把身体节奏重新调稳。"
    },
    conclusion: {
      title: "总结寄语",
      text: "六月不是单纯冲刺，而是把已有经验变成稳定成果。越能聚焦重点，越容易看见真实的回报。"
    },
    aries: {
      theme: "稳定后的爆发与整合（Consolidation & Breakthrough）。",
      work: "您的主动性和行动力依旧是优势，非常适合将上半年积累的计划付诸实践。6月重点在于系统性地跟进已启动的项目，将碎片化的精力整合到几个核心领域，确保每一步都是稳扎稳打的。",
      love: "社交魅力持续在线，但建议将关注点从“吸引力”转移到“安全感”的建立上。与亲密关系相处时，多进行深层、有质量的沟通，重视承诺与稳定。",
      money: "财运主题依然是“积累的成果”。宜避免冲动性或过急的投资，将精力放在提升专业能力和人脉资源上，这些才是未来财富的基石。",
      health: "整体状态良好，但容易因为工作和对目标的执着而忽略了放松。需要注意精力分配的平衡，保证充足的休息来支撑持续的输出。"
    },
    taurus: {
      theme: "稳定与价值的确认。本月重点在于巩固既有的资源和价值体系，适合进行实质性的积累和规划。",
      work: "适合深度钻研、优化现有流程。工作上的稳定感能带来极大的支持，但需警惕因过于保守而错失灵活机会。",
      love: "重视安全感和物质基础的感情关系。家庭生活温馨，适合进行共同规划大型目标，但沟通时需注意表达需求，而非仅凭感觉。",
      money: "财源稳定，宜投资于长期、看得见的资产（如不动产、实体项目）。不宜进行高风险的短期投机。",
      health: "容易因思虑过度影响消化系统。保持规律的饮食和温和的运动（如瑜伽、散步）能帮助你更好地放松身心。"
    },
    gemini: {
      theme: "思维的扩展与连接。六月你的思维活跃度极高，连接了更多新领域，但需要学会将信息“落地”而非停留在概念层面。",
      work: "沟通和多任务处理能力爆棚，非常适合需要跨部门协调或信息整合的项目。不过，要注意信息过载带来的焦虑感。",
      love: "感情生活充满新鲜感和话题。你可能会从朋友或新的圈子认识到潜在的伴侣，宜用理性探索兴趣，避免因好奇而草草收场。",
      money: "财运机会来自信息交流或咨询服务。学习新技能或充当信息“中间人”能带来额外收入。",
      health: "注意颈部和神经系统的过度使用。保持充足的休息和冥想时间，让思绪有片刻的宁静。"
    },
    cancer: {
      theme: "情感的回归与守护。本月情感需求处于高位，本能地保护身边重要的人和环境。是疗愈和重建内心安全感的关键期。",
      work: "工作上容易被情感因素影响判断，需要特别留意界限感。适合回归到能让内心感到“归属”的岗位或学习领域。",
      love: "情感能量充沛，家庭关系是最大的支持来源。你可能会扮演重要的照顾者角色，给予和接收大量的爱。",
      money: "财务决策倾向于“贴心”或“支持亲友”。不宜为了维护关系而过度透支财务。稳健的储蓄计划更适合你。",
      health: "注意肠胃和情绪相关的身体反应。学会“为自己做饭”式的自我关怀，例如温和的浴盐泡澡或冥想。"
    },
    leo: {
      theme: "自我展现与舞台焦点。本月你是人群的中心，你的热情和领导力自然散发光芒。这是展示才华、争取认可的最佳时机。",
      work: "极具表现力和领导力。无论是团队项目还是需要做演示的场合，你都会脱颖而出。大胆提出你的想法，成为行动的引领者。",
      love: "感情生活处于高光时刻，你的光芒很容易吸引到关注。但要注意，不能让“舞台上的光芒”影响到私密关系的深度交流。",
      money: "属于通过名气、曝光或展现个人品牌带来的收入。公开演讲、成为意见领袖（KOL）等能带来财运。",
      health: "容易因为过度表现和兴奋而忽略身体的信号。注意心血管和颈部，确保在光芒万丈之后，给自己安排充分的静养时间。"
    },
    virgo: {
      theme: "完美的优化与服务。本月，你的关注点聚焦于“如何让万事万物更有效率”。你的细致观察力达到顶峰。",
      work: "流程改进、细节把控是你的强项。无论是工作报告的润色、系统的Bug修复，还是学习新领域的知识点梳理，都能发挥出超强的专业度。",
      love: "在关系中表现得过于理性，可能会让人感到“距离感”。请记得，情感的表达不一定需要逻辑，偶尔的无厘头也会很温暖。",
      money: "财运的提升点在于“精细化管理”和“服务专业性”。通过提供别人认为小而美的服务或数据分析，能带来可靠的收入。",
      health: "过度分析和挑剔容易造成精神内耗，导致神经衰弱。培养“放过自己”的能力，给身体放一个“Beta测试期”的假。"
    },
    libra: {
      theme: "和谐的建立与人际的平衡。这是你本月的主旋律。你肩负着平衡群体的责任，需要处理复杂的人际关系网络。",
      work: "沟通协调能力达到顶峰，非常适合公关、外交、法律或艺术策展等需要平衡各方意见的职业。",
      love: "关系是和谐与美学的体现。你会努力维护一段稳定、优雅的伴侣关系。但在做决定时，要小心翼翼，不要为了取悦所有人而失去自我立场。",
      money: "财运稳定，主要依赖于合作关系和人脉资源。适合参与合作项目带来的分红或佣金收入。",
      health: "注意因过度思虑和“取悦他人”而导致的肩膀和颈部紧张。做一些平衡感训练，如太极拳或伸展运动，有帮助。"
    },
    scorpio: {
      theme: "深层真相的挖掘与蜕变。本月，你的直觉和洞察力极其敏锐，能穿透表象，直达事物或人心深处的真相。",
      work: "适合进行调查、研究、心理分析或危机处理类的工作。你会发现一些别人看不见的隐藏结构或秘密。",
      love: "情感关系会经历一次深度的洗牌和试炼。你需要面对关系的真相，无论这段关系是需要深入探索，还是需要彻底放手。",
      money: "财运的爆发点在于挖掘“隐形财富”或“幕后资源”。投资领域适合研究深度价值和需要高度机密的项目。",
      health: "情绪的起伏和思虑容易影响泌尿系统和生殖系统。通过强度的运动（如游泳、HIIT）来释放情绪积压的能量。"
    },
    sagittarius: {
      theme: "视野的开阔与远方探索。本月你的好奇心和探索欲被点燃，渴望突破舒适区，学习更广阔的知识体系。",
      work: "知识探索是本月最佳的驱动力。适合出国考察、学习外语、拓展跨文化交流项目。思路开阔，适合担任顾问或导师角色。",
      love: "感情上渴望精神层面的契合，容易对伴侣提出“一起探索世界”的要求。关系宜保持一起成长的状态，避免陷入过度的“舒适区”。",
      money: "收入来源可能会与“远方”或“教育/文化传播”挂钩。投资目光要放远，关注行业趋势而非眼前的蝇头小利。",
      health: "注意因奔波和精神亢奋带来的用眼过度和免疫力下降。旅行时记得随时补充维生素和休息。"
    },
    capricorn: {
      theme: "责任与结构的重塑。本月，你的野心和务实精神得到极大的体现。所有努力都将导向更坚实的长期结构和可见的成就。",
      work: "职场表现极其出色，是收获实质性认可和职级提升的好时机。你需要承担更重要的责任，这是功成名就的阶段。",
      love: "情感表达趋于内敛和责任感。你倾向于将爱与责任感挂钩。与伴侣相处时，多用行动而非华丽的辞藻来证明你的心意。",
      money: "财务决策极具远见和规划性，非常适合进行大额、有结构支撑的投资，如房产、年金计划等。",
      health: "容易因为目标过大而产生“过劳感”。请记得为自己设定一个“非工作任务”，比如一项纯粹为了乐趣的爱好，来平衡心性。"
    },
    aquarius: {
      theme: "理想主义的社会化。本月，你更关注“如何让一个系统更好运作”，你的独特视角和前瞻性理念需要被社会体系接纳和认可。",
      work: "极适合加入或主导前瞻性的、前沿技术的项目。你的想法具有开创性，但需要学会耐心说服更保守的团队成员。",
      love: "感情上保持独立和友谊的成分更强。你需要的是一个能理解你“非主流”想法的灵魂伴侣，而非传统意义上的烟火气。",
      money: "财运的进阶点在于“系统性创新”或“社群运营”。可以尝试利用你的网络影响力，进行知识付费或社群构建。",
      health: "注意精神层面的抽离感，过分脱离现实可能造成精力过剩的疲惫。有意识地将你的“超前思考”回归到日常生活的小细节中去体会。"
    },
    pisces: {
      theme: "灵感的流动与共情体验。本月，你与周围环境的连接感极强，如同一个情感的“接收器”，对美的感受力达到顶峰。",
      work: "适合从事艺术创作、咨询、医疗或需要高度同理心的工作。你的直觉力是最好的“工具”，处理模糊的、非线性的问题。",
      love: "情感联结深入，容易进入“灵魂共鸣”的阶段。与家人、亲密伙伴的陪伴是最好的充电方式，只是需要警惕“过度牺牲”自己。",
      money: "财运流动性大，容易通过艺术项目、慈善活动或间接的、精神层面的合作获得收入。切记，不宜将个人价值完全依附于他人的认可。",
      health: "容易过度吸收外界的负面情绪，导致心绪不宁、睡眠质量下降。通过艺术疗愈（绘画、音乐）或静心冥想来净化自身能量。"
    }
  }
};

const FALLBACK_READING = [
  "本月请把注意力放回现实成果。比起急着扩张，先确认手上的事情是否真正稳定。",
  "适合整理计划、推进旧项目、修正流程。越能拆成具体步骤，越容易看见进展。",
  "关系里需要少一点猜测，多一点清楚表达。稳定感来自真实沟通，而不是单方面忍耐。",
  "财务宜稳健处理，避免临时冲动消费。把预算、储蓄和长期规划重新检查一遍。",
  "留意作息和情绪消耗。身体不是无限电池，适度休息会让整体效率更高。"
];

const yearSelect = document.querySelector("#yearSelect");
const monthSelect = document.querySelector("#monthSelect");
const zodiacGrid = document.querySelector("#zodiacGrid");
const currentPeriod = document.querySelector("#currentPeriod");
const selectedSymbol = document.querySelector("#selectedSymbol");
const selectedName = document.querySelector("#selectedName");
const selectedDates = document.querySelector("#selectedDates");
const monthOverview = document.querySelector("#monthOverview");
const monthConclusion = document.querySelector("#monthConclusion");
const fortuneList = document.querySelector("#fortuneList");
const drawCardButton = document.querySelector("#drawCardButton");
const cardHint = document.querySelector("#cardHint");
const cardResult = document.querySelector("#cardResult");
const fortuneCardImage = document.querySelector("#fortuneCardImage");
const cardCaption = document.querySelector("#cardCaption");
const closeCardButton = document.querySelector("#closeCardButton");
const downloadCardButton = document.querySelector("#downloadCardButton");

let activeSign = SIGNS[0];

function periodKey() {
  return `${yearSelect.value}-${String(monthSelect.value).padStart(2, "0")}`;
}

function buildSelectors() {
  for (let year = 2025; year <= 2030; year += 1) {
    yearSelect.add(new Option(`${year}年`, String(year)));
  }

  UI.months.forEach((month, index) => {
    monthSelect.add(new Option(month, String(index + 1)));
  });

  const now = new Date();
  yearSelect.value = String(Math.min(Math.max(now.getFullYear(), 2025), 2030));
  monthSelect.value = String(now.getMonth() + 1);
}

function buildZodiacGrid() {
  zodiacGrid.innerHTML = SIGNS.map((sign) => `
    <button class="zodiac-card" type="button" data-sign="${sign.id}">
      <span class="zodiac-symbol">${sign.symbol}</span>
      <span class="zodiac-name">${sign.name}</span>
      <span class="zodiac-date">${sign.date}</span>
    </button>
  `).join("");

  zodiacGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".zodiac-card");
    if (!button) return;
    activeSign = SIGNS.find((sign) => sign.id === button.dataset.sign) || SIGNS[0];
    renderReading();
  });
}

function hasReading() {
  return Boolean(READINGS[periodKey()]?.[activeSign.id]);
}

function canDrawCard() {
  return Boolean(CARD_FILES[periodKey()]?.[activeSign.id]);
}

function getCardPath() {
  const period = periodKey();
  const raw = CARD_FILES[period]?.[activeSign.id];
  return `${period}/${CARD_PREFIX}${raw}`;
}

function closeCard() {
  cardResult.hidden = true;
  fortuneCardImage.removeAttribute("src");
  fortuneCardImage.alt = "";
  cardCaption.textContent = "";
  downloadCardButton.removeAttribute("href");
}

function resetCardDraw() {
  const ok = canDrawCard();
  drawCardButton.disabled = !ok;
  drawCardButton.textContent = ok ? UI.draw : UI.unavailable;
  cardHint.textContent = ok ? UI.hint : UI.unavailable;
  closeCard();
}

function drawFortuneCard() {
  if (!canDrawCard()) return;
  const path = getCardPath();
  cardResult.hidden = false;
  cardCaption.textContent = `${activeSign.name} ${activeSign.english} ${yearSelect.value}年${UI.months[Number(monthSelect.value) - 1]}`;
  fortuneCardImage.alt = cardCaption.textContent;
  fortuneCardImage.src = path;
  downloadCardButton.href = path;
  downloadCardButton.download = path.split("/").pop();
}

function renderMonthNote(element, note) {
  if (!note) {
    element.hidden = true;
    element.innerHTML = "";
    return;
  }

  element.hidden = false;
  element.innerHTML = `<h3>${note.title}</h3><p>${note.text}</p>`;
}

function renderReading() {
  const period = periodKey();
  const monthLabel = UI.months[Number(monthSelect.value) - 1];
  const periodData = READINGS[period];
  const reading = periodData?.[activeSign.id];
  const pending = Number(yearSelect.value) === 2026 && Number(monthSelect.value) >= 7 && !reading;

  currentPeriod.textContent = `${yearSelect.value}年 ${monthLabel}`;
  selectedSymbol.textContent = activeSign.symbol;
  selectedName.textContent = pending ? UI.pending : `${activeSign.name} (${activeSign.english})`;
  selectedDates.textContent = pending ? "" : `${activeSign.date} · ${activeSign.element}`;

  document.querySelectorAll(".zodiac-card").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sign === activeSign.id);
  });

  renderMonthNote(monthOverview, reading ? periodData.overview : null);
  renderMonthNote(monthConclusion, reading ? periodData.conclusion : null);
  resetCardDraw();

  if (pending) {
    fortuneList.innerHTML = `<li><h3>${UI.pendingTitle}</h3><p>${UI.pending}</p></li>`;
    return;
  }

  const values = reading
    ? [reading.theme, reading.work, reading.love, reading.money, reading.health]
    : FALLBACK_READING;

  fortuneList.innerHTML = UI.categories.map((category, index) => `
    <li>
      <h3>${index + 1}. ${category}</h3>
      <p>${values[index]}</p>
    </li>
  `).join("");
}

fortuneCardImage.addEventListener("error", () => {
  cardCaption.textContent = UI.error;
});

closeCardButton.addEventListener("click", closeCard);
drawCardButton.addEventListener("click", drawFortuneCard);
yearSelect.addEventListener("change", renderReading);
monthSelect.addEventListener("change", renderReading);

buildSelectors();
buildZodiacGrid();
renderReading();
