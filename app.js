const signs = [
  { id: "aries", name: "白羊座", english: "Aries", symbol: "♈", icon: "♈️", date: "3月21日 - 4月19日", element: "火" },
  { id: "taurus", name: "金牛座", english: "Taurus", symbol: "♉", icon: "♉️", date: "4月20日 - 5月20日", element: "土" },
  { id: "gemini", name: "双子座", english: "Gemini", symbol: "♊", icon: "♊️", date: "5月21日 - 6月21日", element: "风" },
  { id: "cancer", name: "巨蟹座", english: "Cancer", symbol: "♋", icon: "🦀", date: "6月21日 - 7月22日", element: "水" },
  { id: "leo", name: "狮子座", english: "Leo", symbol: "♌", icon: "🦁", date: "7月23日 - 8月22日", element: "火" },
  { id: "virgo", name: "处女座", english: "Virgo", symbol: "♍", icon: "🦋", date: "8月23日 - 9月22日", element: "土" },
  { id: "libra", name: "天秤座", english: "Libra", symbol: "♎", icon: "⚖️", date: "9月23日 - 10月22日", element: "风" },
  { id: "scorpio", name: "天蝎座", english: "Scorpio", symbol: "♏", icon: "🦂", date: "10月23日 - 11月21日", element: "水" },
  { id: "sagittarius", name: "射手座", english: "Sagittarius", symbol: "♐", icon: "🏹", date: "11月22日 - 12月21日", element: "火" },
  { id: "capricorn", name: "摩羯座", english: "Capricorn", symbol: "♑", icon: "🐐", date: "12月22日 - 1月19日", element: "土" },
  { id: "aquarius", name: "水瓶座", english: "Aquarius", symbol: "♒", icon: "🏺", date: "1月20日 - 2月18日", element: "风" },
  { id: "pisces", name: "双鱼座", english: "Pisces", symbol: "♓", icon: "♓", date: "2月19日 - 3月20日", element: "水" }
];

const categories = [
  "✨ 核心主题",
  "💼 工作/学习",
  "💖 感情/家庭",
  "💰 财运",
  "❤️ 健康"
];

const cardImageFiles = {
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
  }
};

const fixedReadings = {
  "2026-2": {
    title: "✨ 2026年2月十二星座运势 ✨",
    overviewTitle: "🌟 整体能量场",
    overview: "关注「内在重塑」与「界限重建」。本月能量从水瓶座的思辨冷静过渡到双鱼座的温柔、感性，重点在于回顾旧模式、修复关系，并为下半年的成长设下坚实的心理基础。",
    conclusionTitle: "",
    conclusion: "",
    author: "🦞虾头 编著",
    signs: {
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
        love: "情感关系进入需要深度沟通的阶段，需要清晰地处理未解决的“疙瘩”，沟通的关键在于展现“公平感”和“长期共同设想”。",
        money: "财务上机会稳定，但成功依赖于你是否敢于在合作和投入上“小试牛刀”，接受适度风险。",
        health: "关注身心平衡，避免因过度思虑或工作压力导致身心俱疲。"
      },
      gemini: {
        theme: "思想交汇与多维启动 (Idea Convergence & Multi-tasking)。",
        work: "思维敏锐度极高，是极佳的学习和交流期。适合拓展人脉、研究新领域，甚至考虑转型的蓝图规划。",
        love: "关系中充盈着思辨和互动。需要明确关系中的“期待边界”，才能将暧昧发展为稳定的合作或亲密。",
        money: "财务上机会点多，收入来源可能来自多元化的信息或知识输出。但务必将所有“期待”写下来，避免信息差导致的误会。",
        health: "注意思绪的切换速度过快，导致精神内耗。需要设置流程和节奏，让思绪有一个固定的停靠点。"
      },
      cancer: {
        theme: "情感深潜与根基修复 (Emotional Depth & Foundation Repair)。",
        work: "极度适合进行自我分析和回顾。在职场上，需警惕被情感因素干扰客观判断，重点处理“收尾”和“合规”事务。",
        love: "情感课题成为核心焦点，是修复内在创伤，与家人和解的良机。需要勇敢地“直面”和“说出”那些一直隐藏的情绪。",
        money: "财运与“安全感”挂钩。处理财务宜关注已过期的账单、合约的细节，积攒信任感才是最大财富。",
        health: "留意情绪化的消耗。推荐进行冥想、沉浸式的放松活动，让内心平静成为第一优先。"
      },
      leo: {
        theme: "舞台重塑与自我展示 (Stage Redefinition & Self-Expression)。",
        work: "存在“被关注”和“展示”的冲动，非常适合接受新挑战或承担需要曝光度的项目。这是展现领导力和创造力的绝佳时刻。",
        love: "渴望被看见、被欣赏。关系发展更倾向于戏剧化和高光时刻，需将这份焦点能量用在“经营深度”而非“炫耀广度”上。",
        money: "财务上的机会源于“人脉引荐”或“舞台曝光”。敢于将自己的能力和光环化为可以变现的资源。",
        health: "警惕因过于表现欲强而导致的过度兴奋和精神亢奋。保持适度的“退场”和“休息”时间。"
      },
      virgo: {
        theme: "规律重建与边界设定 (Routine Building & Setting Boundaries)。",
        work: "焦点完全回归到“细节优化”和“流程建立”。是清理工作环境、优化生活系统、建立长期技能壁垒的最佳时机。",
        love: "关系进入“责任检验期”，需要更清晰的定义。不要事事扮演完美修复者的角色，学会要求和接受对方的清晰界限。",
        money: "财务规划非常务实，适合进行资产的盘点、清算、优化结构，将“浪费”转化为“盈余”。",
        health: "关键提醒：过度思虑导致的焦虑。请强迫自己进行结构化的放松，例如规律的散步、阅读流程化的手册，而不是无目的的刷手机。"
      },
      libra: {
        theme: "和解修复与人际平衡 (Reconciliation & Harmony Restoration)。",
        work: "社交和合作的重要性空前提升。容易处理棘手的人际矛盾，但切记不要为了维持表面和平而牺牲了自己的核心利益。",
        love: "关系中需要学会“松手”和“放权”。不要总是做那个“维系者”，学会在关键时刻优雅地退让或引导对方，而非全盘接管。",
        money: "财运稳定，但投资决策容易受情绪波动影响（想“讨好”自己）。决策时务必加入第三方的、客观的“制衡意见”。",
        health: "精神层面的过度付出容易导致内耗。学会用更“自我中心”的方式来照顾自己，而不是通过“取悦他人”来获得心理安慰。"
      },
      scorpio: {
        theme: "深度隐私与情感重审 (Deep Dive & Private Review)。",
        work: "课题聚焦于“根基”和“幕后”。适合研究、侦查性工作、或深入挖掘一个领域深层的底层逻辑。在职场中，要警惕信息泄露，保护好自己的核心价值。",
        love: "情感上进入“重审期”，不排除旧情重燃或被压抑的家族议题浮现。需要极强的洞察力来分辨哪些是“缘分”，哪些是“执念”。",
        money: "财运的提升与你揭开的真相（或解决的阴谋）挂钩。财务管理上需要警惕“隐形支出”和“看不见的债务”。",
        health: "情绪的释放和深度挖掘可能会带来身心的疲惫感。深度排毒（情绪、身体、精神）是本月的主题。"
      },
      sagittarius: {
        theme: "表达觉醒与格局开阔 (Expressive Awakening & Broadening Vision)。",
        work: "「开口」是最大的能量！适合进行演讲、教学、跨界交流。视野会非常开阔，不断从不同的文化、学识中汲取灵感，将这些“想法”落地为行动。",
        love: "情感上需要“扩大格局”，跳脱出过时的相处模式，用更广阔的视角看待亲密关系。",
        money: "财运和“远方、视野”有关。可以考虑拓展新的收入渠道，或将个人知识进行体系化的输出，实现价值延伸。",
        health: "需警惕“精神上的过载”。思考很多、输出很多，但要注意脚踏实地的休息，让身体的节奏匹配思绪的广度。"
      },
      capricorn: {
        theme: "现实承载与结构落地 (Tangible Reality & Structure Building)。",
        work: "权威感回归，责任和目标感极强。本月会强力推动将一切“概念”转化为“可执行的、有时间节点”的计划。非常适合晋升、制定长期事业蓝图。",
        love: "情感关系进入“现实测试期”。浪漫的想象必须让位于现实的承诺和责任。相处的核心是“共同构建的未来蓝图”。",
        money: "财运目标明确，适合处理涉及房产、固定资产或长期股权的事务。你的责任心会直接转化为财富的稳定增长。",
        health: "最大的风险是“过度劳累”和“自我苛责”。记得，再宏伟的蓝图，也需要一个健康的载体——就是你本身。"
      },
      aquarius: {
        theme: "创新前瞻与理念革新 (Innovation & Conceptual Leap)。",
        work: "充分展示前瞻性思维和独特性，这是发挥创意和建立社群影响力的高光期。最大的挑战是如何在“前卫想法”和“现实执行”之间找到完美平衡点。",
        love: "情感上渴望灵魂层面的联结，超脱于世俗的标签。适合和有共同理想、精神层面的伙伴发展关系。",
        money: "财运来源可能来自于“前沿科技”、“社群项目”或“创新性思维的商业化”。保持客观看待，不被眼前的诱惑冲昏头脑。",
        health: "易陷入“思虑过度”和“脱离现实”的状态。建议将部分抽象的想法，通过具象化的动作（如运动、动手项目）来平复心绪。"
      },
      pisces: {
        theme: "疗愈接纳与直觉信任 (Empathy & Trusting Intuition)。",
        work: "灵性直觉和共情力达到顶峰，能感受到很多人的未说出口的需求。适合需要艺术感、咨询感或关怀的行业，但要注意避免被“情绪拉扯”而做决策。",
        love: "极度敏感和包容，情感连接的需求达到顶峰。是自我和解、与过去和好、重新定义“什么是爱”的月份。",
        money: "财运平稳，偏向于“非物质价值”的回报（如精神满足、学识积累）。重大投资需谨慎，过度相信直觉而非数据。",
        health: "最容易“为别人而活”，忽略自身需求。本月最大的任务是：学会为自己设限，并温柔地拒绝不合理的要求。"
      }
    }
  },
  "2026-3": {
    title: "🌟 2026年3月 十二星座运势 🌟",
    overviewTitle: "🌟 三月重点",
    overview: "本月内容已使用指定文案。选择不同星座后，可查看该星座在核心主题、工作/学习、感情/家庭、财运与健康五个部分的完整解说。",
    conclusionTitle: "",
    conclusion: "",
    author: "🦐 虾壳 编著 / 🦞頭 编著",
    signs: {
      aries: {
        theme: "开创与行动力爆发 (Energy Field: Action & Pioneering)",
        work: "能量充沛，非常适合主动出击，是启动新项目和争取机会的最佳时期。适合将想法付诸实践，但需注意不要因为过于急切而做出草率的判断，宜先谋划再行动。",
        love: "社交魅力极强，容易吸引目光。单身者机遇多，勇敢迈出第一步；有伴侣者需注意沟通方式，切记不要让冲动言语影响关系。",
        money: "财运看重的是“行动的成果”。适合开拓性投资，但投资前务必做好风险评估，切忌盲目跟风。",
        health: "活力强劲，但需警惕过度透支精力。建议保持充足的休息和冷静的思维，避免因急躁而导致心血管或过劳问题。"
      },
      taurus: {
        theme: "务实积累与价值落地 (Energy Field: Stability & Manifestation)",
        work: "稳定性和耐力是您的最大优势。工作上适合深耕细作、完善细节，靠稳扎稳打能获得认可。注意不要固守旧有模式，可适当学习新技能。",
        love: "情感需求稳定，需要物质和安全感的双重确认。居家时间增多，适合与家人进行深度沟通，化解误会。",
        money: "财运稳健，适合积累性投资，如不动产或品牌价值。不宜进行高风险投机，抓住实实在在的收入机会。",
        health: "注意消化系统和足部健康。保持规律的饮食和散步活动，让身体的根基更扎实。"
      },
      gemini: {
        theme: "信息链接与思潮交汇 (Energy Field: Connection & Communication)",
        work: "沟通能力达到顶峰，您将是团队中的“信息枢纽”。适合需要大量信息整合、演讲或多方协调的工作。多方交流能带来新思路。",
        love: "感情生活丰富多彩，但心神容易被太多想法牵扯，需要聚焦核心对象。与家人沟通时，注意表达的清晰度，避免信息过载造成误解。",
        money: "财运来源广，适合通过信息差、销售或口才技能变现。但需注意信息筛选，避免因过度分散注意力而错失最佳时机。",
        health: "容易思虑过度，导致神经系统紧张。建议通过学习新的、能占据精神高度的爱好来疏导过剩的脑力。"
      },
      cancer: {
        theme: "情感滋养与自我庇护 (Energy Field: Nurturing & Security)",
        work: "工作重心回归到“归属感”和“安全感”的构建上。适合与团队建立情感连接、参与社群项目。在人际合作中扮演重要支持角色。",
        love: "情绪饱满，家庭和情感是最大的能量来源。家人的需求会成为您的首要关注点，注意平衡照顾他人的心与照顾好自己。",
        money: "财运与“依靠的群体”（家庭、亲密圈子）相关。适合继承、合作或与人共同投资的稳健项目，靠信任建立财富壁垒。",
        health: "情绪波动较大时，容易影响脾胃和睡眠。保持情绪的稳定和规律的作息是您最重要的“健康维护”任务。"
      },
      leo: {
        theme: "自我展现与舞台焦点 (Energy Field: Recognition & Spotlight)",
        work: "您的光芒会得到高度认可，是展现领导力、展示个人才华的最佳时机。适合担任核心角色，引领项目走向公开舞台。",
        love: "渴望被看见和赞赏。单身者容易吸引到有强烈气场和追求者；有伴侣者需要注意，过度的自我中心可能会让伴侣感到压力。",
        money: "财运来自于“影响力”和“名声”。如果能将自己的专业形象包装得足够出色，将迎来不错的进账。",
        health: "容易因为过分关注外界评价而消耗心力。记得享受属于自己的独处时间，不为外界的掌声而过度消耗体能。"
      },
      virgo: {
        theme: "系统优化与完美执行 (Energy Field: Analysis & Refinement)",
        work: "您的分析能力和条理性达到高峰。无论是工作流程的优化、知识的整理，还是计划的打磨，都将发挥出不可替代的作用。是“幕后英雄”的最佳时期。",
        love: "在感情中倾向于“服务”和“改进”，会把大量精力用于为伴侣或家人解决问题。但要注意，不要将“完美主义”带到感情中，给对方留一些不完美的空间。",
        money: "财运稳定，适合靠专业技能（如咨询、服务优化）变现。对财务细节的把控要求极高，需要建立完善的财务系统。",
        health: "容易过度工作和挑剔自己及周围环境。必须有意识地“放过自己”，将精力的分配从“细节纠错”转移到“整体放松”上。"
      },
      libra: {
        theme: "平衡协调与人际平衡 (Energy Field: Harmony & Relationship)",
        work: "处于人际关系网络的核心位置。您将非常擅长调解冲突、平衡各方意见。但在做决定时，可能会因为顾虑太多而犹豫不决。",
        love: "关系是主题，您会努力维系所有人的和睦。单身者容易被有吸引力的群体所吸引；有伴侣者需要主动打破平衡的僵局，不让“维持和谐”成为“逃避冲突”。",
        money: "财富的获取与“合作”和“关系网络”紧密挂钩。通过合作项目或人际引荐能带来机会，但决策上需要更果断，避免因追求公平而停滞不前。",
        health: "容易因为过分在意他人的看法而引发精神上的疲惫。学会说“不”，是三月最大的健康课题。"
      },
      scorpio: {
        theme: "深刻洞察与蜕变重生 (Energy Field: Transformation & Depth)",
        work: "直觉和洞察力超强，适合研究幕后真相、调查性工作或心理学领域。您能看到别人看不到的本质，但需小心处理好信息带来的权力感。",
        love: "情感深度被激发，关系趋于深刻或面临重大考验。需要面对一段关系中隐藏的真相，无论是正面还是负面，都将迎来一次“清理”过程。",
        money: "财运和“资源整合”挂钩。适合与资源雄厚的人合作，或进行具有隐私性、高价值的服务性交易。不适合浅尝辄止的投资。",
        health: "注意情绪的积压和情绪的爆发。很多压力会堆积在身体的隐秘部位，学会健康地释放和处理强烈的内心感受至关重要。"
      },
      sagittarius: {
        theme: "探索边界与信念拓展 (Energy Field: Exploration & Philosophy)",
        work: "渴望知识的广度和自由的探索精神。非常适合跨文化交流、旅行相关的工作或需要宏大愿景的项目。思维越跳脱，视野越开阔。",
        love: "感情需要的是“精神共鸣”而非单纯的陪伴。与伴侣分享更广阔的世界观和人生哲学，才能让关系持续升温。",
        money: "财运来源于“知识的传递”和“远方的机会”。不要局限于眼前可见的范围，多关注全球视野和长期发展趋势。",
        health: "容易因为精神上的“飞翔”而忽略了身体的基础需求，特别是腿脚和脊柱。旅行和户外活动是最好的调理方式。"
      },
      capricorn: {
        theme: "责任扛肩与系统构建 (Energy Field: Discipline & Structure)",
        work: "事业心达到顶峰，责任感极强。是时候将所有的抱负和规划落地为可执行的阶梯。展现成熟稳重的一面，建立可信赖的职业声誉。",
        love: "责任感可能会让您忽略了感情上的“浪漫”需求。需要有意识地为伴侣和家人留出不设 KPI 的情感空间，学会柔软地爱。",
        money: "极佳的财运期，只要坚持纪律和长远规划，财富会如同爬山一样，稳健而不可阻挡地积累。",
        health: "容易给自己设定过高的目标，造成身心俱疲。学会与自己和解，接受“暂时的不完美”，给自己放一个“非工作日假”。"
      },
      aquarius: {
        theme: "集体的蓝图与未来愿景 (Energy Field: Innovation & Community)",
        work: "您将是思想的引领者。适合参与公益项目、技术前沿研究或需要集体智慧的平台搭建。您的独特视角能点燃整个团队的灵感。",
        love: "情感表达上倾向于理性分析，有时会显得“超脱”。需要找到一个能理解您思维广度，并且能欣赏您独特性格的伴侣，用热情去平衡您的理性。",
        money: "财运来源于“创新模型”或“团体项目分成”。适合参与概念验证（PoC）类的投资或与科技领域的人合作。",
        health: "精神层面活跃，容易过度思考和焦虑。多进行冥想、瑜伽等能让思绪“回落到当下”的活动，对抗精神疲劳。"
      },
      pisces: {
        theme: "共情疗愈与精神连接 (Energy Field: Intuition & Empathy)",
        work: "您的直觉和同理心是最大的财富。适合需要人文关怀、艺术指导、心理咨询或跨界融合的领域。直觉比逻辑更可靠。",
        love: "情感共鸣极强，能感受到最深层的连接。对伴侣的奉献心非常高，但在处理界限时要小心，不要过度吸收他人的情绪负担。",
        money: "财运往往与“精神服务”或“幕后创意”相关。适合靠艺术才华、人脉的情感支持来带来稳定的收入流。",
        health: "极易受情绪影响而导致身体症状（如头痛、免疫力下降）。规律作息、充足的艺术熏陶和冥想，是保持身心平衡的关键。"
      }
    }
  },
  "2026-4": {
    title: "🎨 2026年4月十二星座运势",
    overviewTitle: "🎨 四月重点",
    overview: "本月内容已使用指定文案。选择不同星座后，可查看该星座在核心主题、工作/学习、感情/家庭、财运与健康五个部分的完整解说。",
    conclusionTitle: "",
    conclusion: "",
    author: "🦞頭 编著",
    signs: {
      aries: {
        theme: "突破、开创、展现自我（Energy Field: Action & Pioneering）",
        work: "能量充沛，非常适合主动出击，是启动新项目和争取机会的最佳时期。适合将想法付诸实践，但需注意不要因为过于急切而做出草率的判断。",
        love: "社交魅力极强，很容易在社交场合吸引目光，单身者机遇多，有伴侣者需要注意沟通方式，避免因冲动引发口舌。",
        money: "适合开拓性投资或需要高度主动性的收入渠道。财运看重的是“行动的成果”。",
        health: "活力强，但容易过度透支精力，需时刻提醒自己，保持冷静思考，避免盲目拼搏。"
      },
      taurus: {
        theme: "稳定、积累、追求内在的品质感与安全感（Stability & Quality）。",
        work: "生活步调会变得非常稳定和有规律，非常适合打磨自身技能和积累口碑。工作上的成就会来源于持续的耐心投入，不宜急于求成。",
        love: "关系趋于稳定，强调一起建立可见的“共同生活基础”，能带来深层安全感。",
        money: "财运表现稳健，属于“积少成多”的类型。适合稳健的理财规划，与技能提升相关的收入来源会明显改善。",
        health: "整体平稳，注意精神层面的放松，适当的享受生活品质能让身心更加平衡。"
      },
      gemini: {
        theme: "社交能量爆发、人际连接、信息拓展（Communication & Connection）。",
        work: "非常适合沟通、谈判和跨界合作。信息获取速度极快，创意点子多，是建立人脉和知识网络的好时机。",
        love: "社交场合会非常引人注目，是单身人士容易遇到“心动对象”的时期。但要注意，过度的信息摄入也可能带来思虑过重。",
        money: "收入来源多元化，但钱财的积累需要时间沉淀，不适合进行高风险的短期投机。",
        health: "易受信息流和过度社交的影响，保持“放空”和“放慢节奏”对身心是最好的调养。"
      },
      cancer: {
        theme: "回归本源，重建安全感，关注家庭与根基（Nesting & Roots）。",
        work: "适合处理与“根基”、“历史”、“根源”相关的工作，如企划、历史研究或团队协作中的角色确认。",
        love: "家庭和情感连接是月度最大的能量场。适合与家人深度沟通，重建情感联结。",
        money: "财运的稳定度提升，更侧重于持续性和可预期性的收入来源。",
        health: "需提防因家庭或工作责任过重而导致的身体和精神疲劳，学习“放权”很重要。"
      },
      leo: {
        theme: "聚焦个人光芒，展现领导力，并追求舞台中心的位置（Spotlight & Leadership）。",
        work: "职场上极具表现力和说服力，容易获得关注和领导机会。适合做需要展示个人权威性的项目。",
        love: "魅力达到巅峰，身边人会感受到您的光芒。但需注意，过强的自我展现偶尔会带来人际上的冲突和压力。",
        money: "财运整体看好，阶段性提升机会较多，特别是与个人品牌和权威相关的领域。",
        health: "保持状态很好，但需要学会适时收敛光芒，给身心留出喘息和沉淀的空间。"
      },
      virgo: {
        theme: "细节打磨、精益求精、自我修正（Refinement & Service）。",
        work: "逻辑能力和执行力最强。非常适合需要深度优化、流程梳理和细节检查的岗位。",
        love: "关系会进入一个考验“现实问题”的阶段，需要理性沟通，不宜过度挑剔。",
        money: "财务上需尤其谨慎，任何需要处理他人资源或资金的环节，都要反复核对和确认，防范因疏忽造成损失。",
        health: "建议通过规律的运动或环境的整理来疏导焦虑，保持身心秩序。"
      },
      libra: {
        theme: "平衡重建、关系重组、寻找和谐的秩序感（Rebalancing & Harmony）。",
        work: "职场人脉关系和合作模式是重点。任何与人打交道的工作，都需要重新评估“平衡点”，沟通能力是最大的助力。",
        love: "情感关系将经历一次深刻的调整期，需要打破过去的妥协模式，明确自己对关系的要求，寻找“心灵契合度”。",
        money: "财运的提升点在于人脉和合作，财源稳定，关键在于学会平衡付出与回报的价值。",
        health: "关注身心和环境的和谐感，通过艺术、美学或维护生活秩序来达到最佳状态。"
      },
      scorpio: {
        theme: "深度挖掘、聚焦目标、能量的集中爆发（Introspection & Focus）。",
        work: "执行力极强，适合深入挖掘一个问题直到彻底解决，擅长处理别人回避的“深层、复杂”议题。",
        love: "感情议题会非常深入，涉及信任、界限和未来规划，关系将变得更成熟和务实。",
        money: "财运的提升往往与“突破性”、“深层次资源”的获取有关，能快速解决财务上的难题。",
        health: "容易因为过度专注于目标而忽略身体的细微警报，需要刻意安排放松时间。"
      },
      sagittarius: {
        theme: "探索、自由、格局提升，将想法具象化（Exploration & Expansion）。",
        work: "灵感和学习的动力十足，极利于跨界学习、拓展知识边界，职业方向和副业的探索会带来惊喜。",
        love: "感情生活充满乐趣和探索欲，适合探索更广阔的精神层面，不宜过于沉溺于感官享受。",
        money: "财运来源于“变动”和“开拓”，容易有意外的奖金或来自远方/新领域的进账。",
        health: "整体状态偏向积极和外向，但需注意维持稳定的生活节奏，避免“想法太多”而分散精力。"
      },
      capricorn: {
        theme: "稳健积累、责任担当、脚踏实地（Responsibility & Structure）。",
        work: "这是一个回报期，前期所有的积累和忍耐力都会在这里得到体现，非常有利于争取到有实权、有稳定性的职位或长期项目。",
        love: "关系趋向于“建立共同的未来结构”，适合讨论长远规划（如购房、职业规划的结合）。",
        money: "稳步上升，偏向于通过系统化、制度化的方式获取的稳定收入，这是最大的助力。",
        health: "压力来源于责任感，要学会将工作与休息做明确切割，才能让身体持续支持这种长期目标。"
      },
      aquarius: {
        theme: "创新、集体、超脱，思维的爆发点（Innovation & Community）。",
        work: "极度利于前沿技术、团队合作和具有社会意义的项目。你的独特思维模式是最大的价值输出点。",
        love: "关系层面追求的是“精神上的自由度”和“思想上的共鸣”，需要保持一定的个体空间。",
        money: "财富的增长点可能来自科技、互联网或社区协作类的项目，思维的输出可以直接变现。",
        health: "精神层面的兴奋感可能导致生理上的忽略，保持规律的作息和运动至关重要。"
      },
      pisces: {
        theme: "疗愈、回归内心、精神的蜕变（Healing & Intuition）。",
        work: "适合需要共情能力、艺术感或服务性质的工作。重点在于将内心的感悟，转化成可以被他人理解和利用的成果。",
        love: "情感层面的深度联结非常重要，容易与灵魂伴侣产生共鸣，但同时也容易因感性而产生不切实际的幻想。",
        money: "财运的提升与“精神价值的变现”有关，比如咨询、创作、艺术品等。",
        health: "整体倾向于情绪波动，需要通过冥想、艺术或亲近自然的方式来锚定心神。"
      }
    }
  },
  "2026-5": {
    title: "✨ 2026年5月十二星座运势 ✨",
    overviewTitle: "🌟 整体能量场： 🌟 【丰收与课题交汇期】 🌟",
    overview:
      "进入五月，星象能量焦点逐渐从“行动力”（火象）转向“稳定与收获”（土象能量主导）。这是一个需要我们在“现实成果”和“情感责任”之间寻找完美平衡的月份。所有前期探索的阶段性收获都将浮现，需要我们将“理念”转化为“结构”，将“激情”导向“可持续的稳定”。",
    conclusionTitle: "🔮 总结寄语 (Conclusion)",
    conclusion:
      "五月的主题是“从思想到结构，从激情到稳定”。请带着这份审慎的眼光，去评估自己目前所有的“光环”和“热情点”。只有将能量聚焦到能形成实体、能被记录、能被稳定维护的成果上，才能迎来一个丰收且稳固的阶段。",
    author: "🦞虾头 编著",
    signs: {
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
        money: "财富更多源于“无形的价值”——如作品、创意、或帮助他人感受到治愈。但投资时，务必将直觉结论与硬性数据进行交叉验证，警惕“美好的幻想”带来财务风险。",
        health: "这是本月需要特别注意的。因为吸收了太多外部的情绪，精神和情绪系统容易超载。任何时候感到无力，请允许自己“空转”，无需强求答案或答案。"
      }
    }
  }
};

const genericPools = [
  ["重新校准目标", "把复杂事做简单", "主动表达真实想法", "沉淀长期方向", "从细节里找机会", "建立新的节奏"],
  ["适合推进重要项目", "适合复盘和补短板", "适合展示成果", "需要管理时间与优先级", "贵人来自同伴合作", "新知识会带来突破"],
  ["沟通会比猜测更有效", "适合修复旧误会", "需要给彼此一些空间", "单身者容易遇到轻松的互动", "家庭事务适合温和处理", "真诚表达会换来回应"],
  ["预算意识增强", "适合整理账目和订计划", "小额收益来自耐心经营", "避免冲动消费", "适合学习理财知识", "合作收入需要白纸黑字"],
  ["保持规律作息最关键", "适合恢复运动习惯", "注意肩颈与眼睛疲劳", "情绪稳定会带动状态回升", "饮食宜清爽均衡", "给身体留出真正休息的时间"]
];

const toneByElement = {
  火: "行动力会明显回升，但节奏越快越要留出确认细节的时间。",
  土: "现实层面的安排会变得重要，稳稳推进比临时爆发更有力量。",
  风: "信息、人际与选择会变多，先筛选重点，再决定投入方向。",
  水: "直觉和感受会更敏锐，适合照顾内在需求，也适合把关系说清楚。"
};

const monthNames = Array.from({ length: 12 }, (_, index) => `${index + 1}月`);
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

let activeSign = signs[0];

function buildSelectors() {
  for (let year = 2025; year <= 2030; year += 1) {
    yearSelect.add(new Option(`${year}年`, String(year)));
  }

  monthNames.forEach((month, index) => {
    monthSelect.add(new Option(month, String(index + 1)));
  });

  const now = new Date();
  const defaultYear = Math.min(Math.max(now.getFullYear(), 2025), 2030);
  yearSelect.value = String(defaultYear);
  monthSelect.value = String(now.getMonth() + 1);
}

function buildZodiacGrid() {
  zodiacGrid.innerHTML = signs
    .map(
      (sign) => `
        <button class="zodiac-card" type="button" data-sign="${sign.id}" aria-label="查看${sign.name}运势">
          <span class="zodiac-symbol">${sign.symbol}</span>
          <span class="zodiac-name">${sign.name}</span>
          <span class="zodiac-date">${sign.date}</span>
        </button>
      `
    )
    .join("");

  zodiacGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".zodiac-card");
    if (!button) return;
    activeSign = signs.find((sign) => sign.id === button.dataset.sign);
    renderReading();
  });
}

function getFixedMonth() {
  return fixedReadings[`${yearSelect.value}-${monthSelect.value}`];
}

function isPendingMonth() {
  return yearSelect.value === "2026" && Number(monthSelect.value) >= 6;
}

function getCardPath() {
  const folder = `${yearSelect.value}-${String(monthSelect.value).padStart(2, "0")}`;
  const fileName = cardImageFiles[folder]?.[activeSign.id] ?? `${activeSign.id}.png`;
  return `${folder}/${fileName}`;
}

function canDrawCard() {
  return yearSelect.value === "2026" && Number(monthSelect.value) >= 1 && Number(monthSelect.value) <= 5;
}

function resetCardDraw() {
  const canDraw = canDrawCard();
  drawCardButton.disabled = !canDraw;
  drawCardButton.textContent = canDraw ? "抽卡" : "暂无抽卡图";
  cardHint.textContent = canDraw
    ? "点击按钮查看本星座本月运势图。"
    : "2026年6月及以后的运势图暂未开放。";
  closeCard();
}

function closeCard() {
  cardResult.hidden = true;
  fortuneCardImage.removeAttribute("src");
  fortuneCardImage.alt = "";
  cardCaption.textContent = "";
  downloadCardButton.removeAttribute("href");
}

function drawFortuneCard() {
  if (!canDrawCard()) return;

  const cardPath = getCardPath();
  cardResult.hidden = false;
  cardCaption.textContent = `${activeSign.name} ${yearSelect.value}年${monthSelect.value}月运势图`;
  fortuneCardImage.alt = cardCaption.textContent;
  fortuneCardImage.src = cardPath;
  downloadCardButton.href = cardPath;
  downloadCardButton.download = cardPath.split("/").pop();
}

function pick(pool, offset) {
  const year = Number(yearSelect.value);
  const month = Number(monthSelect.value);
  const signIndex = signs.findIndex((sign) => sign.id === activeSign.id);
  const index = Math.abs(year * 7 + month * 11 + signIndex * 13 + offset) % pool.length;
  return pool[index];
}

function makeGenericReading(categoryIndex) {
  const year = yearSelect.value;
  const month = monthSelect.value;
  const chosen = pick(genericPools[categoryIndex], categoryIndex);
  const focus = pick(["节奏", "边界", "耐心", "判断力", "执行力", "信任感", "稳定度"], categoryIndex + 4);
  const advice = pick(
    ["先处理最确定的一件事", "把承诺写清楚", "少一点急着证明", "给重要关系留时间", "避免同时开太多战线", "让计划有可调整的余地"],
    categoryIndex + 8
  );

  if (categoryIndex === 0) {
    return `${year}年${month}月，${activeSign.name}的关键词是“${chosen}”。${toneByElement[activeSign.element]}本月的幸运点藏在${focus}里，${advice}会让整体运势更顺。`;
  }

  return `${chosen}。这个月更看重${focus}，遇到选择时不必急着定论，${advice}，结果会更稳。`;
}

function getReadingItems() {
  if (isPendingMonth()) {
    return ["编写中，请稍侯"];
  }

  const fixedMonth = getFixedMonth();
  const fixedSign = fixedMonth?.signs?.[activeSign.id];

  if (fixedSign) {
    return [
      fixedSign.theme,
      fixedSign.work,
      fixedSign.love,
      fixedSign.money,
      fixedSign.health
    ];
  }

  return categories.map((_, index) => makeGenericReading(index));
}

function renderMonthNotes() {
  if (isPendingMonth()) {
    monthOverview.hidden = true;
    monthOverview.innerHTML = "";
    monthConclusion.hidden = true;
    monthConclusion.innerHTML = "";
    return;
  }

  const fixedMonth = getFixedMonth();

  if (!fixedMonth?.overview) {
    monthOverview.hidden = true;
    monthOverview.innerHTML = "";
  } else {
    monthOverview.hidden = false;
    monthOverview.innerHTML = `
      <h3>${fixedMonth.overviewTitle}</h3>
      <p>${fixedMonth.overview}</p>
    `;
  }

  if (!fixedMonth?.conclusion) {
    monthConclusion.hidden = true;
    monthConclusion.innerHTML = "";
  } else {
    monthConclusion.hidden = false;
    monthConclusion.innerHTML = `
      <h3>${fixedMonth.conclusionTitle}</h3>
      <p>${fixedMonth.conclusion}</p>
    `;
  }
}

function renderReading() {
  const year = yearSelect.value;
  const month = monthSelect.value;
  const fixedMonth = getFixedMonth();
  const readings = getReadingItems();
  const pending = isPendingMonth();

  currentPeriod.textContent = fixedMonth?.title ?? `${year}年 ${month}月`;
  selectedSymbol.textContent = activeSign.symbol;
  selectedName.textContent = pending
    ? `${year}年${month}月运势`
    : `${activeSign.icon} ${activeSign.name} (${activeSign.english}) ${year}年${month}月运势`;
  selectedDates.textContent = pending
    ? "编写中，请稍侯"
    : fixedMonth
    ? `${activeSign.date} · ${activeSign.element}象星座 · ${fixedMonth.author}`
    : `${activeSign.date} · ${activeSign.element}象星座`;

  document.querySelectorAll(".zodiac-card").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sign === activeSign.id);
  });

  renderMonthNotes();
  resetCardDraw();

  fortuneList.innerHTML = pending
    ? `
      <li>
        <h3>运势内容</h3>
        <p>${readings[0]}</p>
      </li>
    `
    : categories
      .map(
        (category, index) => `
          <li>
            <h3>${category}</h3>
            <p>${readings[index]}</p>
          </li>
        `
      )
      .join("");
}

fortuneCardImage.addEventListener("error", () => {
  cardCaption.textContent = "未找到对应运势图，请确认图片已放入对应月份文件夹。";
});

closeCardButton.addEventListener("click", closeCard);
drawCardButton.addEventListener("click", drawFortuneCard);
document.querySelectorAll(".language-switcher button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".language-switcher button").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.documentElement.lang = button.dataset.lang === "ja" ? "ja" : button.dataset.lang === "en" ? "en" : "zh-CN";
  });
});
yearSelect.addEventListener("change", renderReading);
monthSelect.addEventListener("change", renderReading);

buildSelectors();
buildZodiacGrid();
renderReading();
