export type BlogPost = {
  id: string;
  title_ja: string;
  title_en: string;
  title_ko: string;
  date: string;
  excerpt_ja: string;
  excerpt_en: string;
  excerpt_ko: string;
  content_ja: string[];
  content_en: string[];
  content_ko: string[];
  tags: string[];
  image?: string;
};

export const posts: BlogPost[] = [
  {
    id: 'education-birth',
    title_ja: '出生',
    title_en: 'Birth',
    title_ko: '출생',
    date: '2003-07-02',
    excerpt_ja: '人生のスタート地点としての記録。',
    excerpt_en: 'A brief record of the starting point.',
    excerpt_ko: '인생의 출발점에 대한 기록.',
    content_ja: [
      '2003年7月2日に出生。',
      'ここからこれまでの歩みが始まりました。'
    ],
    content_en: [
      'Born on July 2, 2003.',
      'This marks the beginning of my journey.'
    ],
    content_ko: [
      '2003년 7월 2일 출생.',
      '여기서부터 지금까지의 여정이 시작되었습니다.'
    ],
    tags: ['Life'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'education-kindergarten',
    title_ja: '三日月幼稚園 卒園',
    title_en: 'Mikazuki Kindergarten Graduation',
    title_ko: '미카즈키 유치원 졸업',
    date: '2010-03-01',
    excerpt_ja: '幼稚園での経験と最初の学び。',
    excerpt_en: 'Early experiences and first learnings in kindergarten.',
    excerpt_ko: '유치원에서의 경험과 첫 배움.',
    content_ja: [
      '三日月幼稚園を卒園。',
      '集団生活の基礎や、人との関わりの大切さを学びました。'
    ],
    content_en: [
      'Graduated from Mikazuki Kindergarten.',
      'Learned the basics of group life and the importance of relationships.'
    ],
    content_ko: [
      '미카즈키 유치원을 졸업.',
      '단체 생활의 기초와 사람들과의 관계의 중요성을 배웠습니다.'
    ],
    tags: ['Education'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'education-elementary',
    title_ja: '三日月小学校 卒業',
    title_en: 'Mikazuki Elementary School Graduation',
    title_ko: '미카즈키 초등학교 졸업',
    date: '2016-03-01',
    excerpt_ja: '基礎学力と興味の幅が広がった時期。',
    excerpt_en: 'A period where foundational skills and interests expanded.',
    excerpt_ko: '기초 학력과 관심의 폭이 넓어진 시기.',
    content_ja: [
      '三日月小学校を卒業。',
      '学ぶ楽しさを知り、興味の幅が広がった時期でした。'
    ],
    content_en: [
      'Graduated from Mikazuki Elementary School.',
      'This was a time when I discovered the joy of learning and broadened my interests.'
    ],
    content_ko: [
      '미카즈키 초등학교를 졸업.',
      '배우는 즐거움을 알게 되어 관심의 폭이 넓어진 시기였습니다.'
    ],
    tags: ['Education'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'education-junior-high',
    title_ja: '三日月中学高 卒業',
    title_en: 'Mikazuki Junior/Senior High Graduation',
    title_ko: '미카즈키 중·고등학교 졸업',
    date: '2019-03-01',
    excerpt_ja: '学習と活動のバランスを意識し始めた時期。',
    excerpt_en: 'A time when I started balancing study and activities.',
    excerpt_ko: '학업과 활동의 균형을 의식하기 시작한 시기.',
    content_ja: [
      '三日月中学高を卒業。',
      '学習と活動のバランスを意識し始めた時期でした。'
    ],
    content_en: [
      'Graduated from Mikazuki Junior/Senior High.',
      'I began to consciously balance study and extracurricular activities.'
    ],
    content_ko: [
      '미카즈키 중·고등학교를 졸업.',
      '학업과 활동의 균형을 의식하기 시작한 시기였습니다.'
    ],
    tags: ['Education'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'education-high-school',
    title_ja: '小城高校 卒業',
    title_en: 'Ogi High School Graduation',
    title_ko: '오기 고등학교 졸업',
    date: '2022-03-01',
    excerpt_ja: '進路や興味の方向性を深めた時期。',
    excerpt_en: 'A period of deepening interests and future direction.',
    excerpt_ko: '진로와 관심의 방향을 심화한 시기.',
    content_ja: [
      '小城高校を卒業。',
      '進路や興味の方向性を深めるきっかけになりました。'
    ],
    content_en: [
      'Graduated from Ogi High School.',
      'This period helped me refine my interests and future direction.'
    ],
    content_ko: [
      '오기 고등학교를 졸업.',
      '진로와 관심의 방향을 깊이 고민하는 계기가 되었습니다.'
    ],
    tags: ['Education'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'education-miyazaki-university',
    title_ja: '宮崎大学 工学部 情報通信工学プログラム 在籍',
    title_en: 'Miyazaki University (Engineering / ICT Program)',
    title_ko: '미야자키대학교 공학부 정보통신공학 프로그램 재학',
    date: '2022-04-01',
    excerpt_ja: '専門分野を学び、実践的な取り組みに広げていく段階。',
    excerpt_en: 'Studying my field and expanding into practical work.',
    excerpt_ko: '전공을 배우며 실천적인 활동으로 확장해 나가는 단계.',
    content_ja: [
      '宮崎大学 工学部 工学科 情報通信工学プログラムに在籍。',
      '専門分野を学びながら、実践的な取り組みに広げています。'
    ],
    content_en: [
      'Enrolled in the ICT program at Miyazaki University, Faculty of Engineering.',
      'Studying my field while expanding into practical projects.'
    ],
    content_ko: [
      '미야자키대학교 공학부 공학과 정보통신공학 프로그램에 재학.',
      '전공을 배우며 실천적인 프로젝트로 확장하고 있습니다.'
    ],
    tags: ['Education'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'research-thi-thi-zin',
    title_ja: 'Thi Thi Zin 研究室 配属',
    title_en: 'Thi Thi Zin Lab Assignment',
    title_ko: 'Thi Thi Zin 연구실 배속',
    date: '2025-04-01',
    excerpt_ja: '研究テーマに向き合い、アウトプットの質を意識する段階。',
    excerpt_en: 'A phase of focusing on research themes and output quality.',
    excerpt_ko: '연구 주제에 집중하고 결과물의 질을 의식하는 단계.',
    content_ja: [
      '学部4年でThi Thi Zin 研究室に配属。',
      '研究テーマに向き合い、アウトプットの質を高める姿勢を大切にしています。'
    ],
    content_en: [
      'Assigned to the Thi Thi Zin Lab in my senior year.',
      'I focus on my research theme and strive to improve output quality.'
    ],
    content_ko: [
      '학부 4학년에 Thi Thi Zin 연구실에 배속.',
      '연구 주제에 집중하며 결과물의 질을 높이려는 자세를 중요하게 생각하고 있습니다.'
    ],
    tags: ['Research'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'research-masters-plan',
    title_ja: '修士課程（Thi Thi Zin 研究室）予定',
    title_en: 'Master’s Program Plan (Thi Thi Zin Lab)',
    title_ko: '석사 과정(Thi Thi Zin 연구실) 예정',
    date: '2026-04-01',
    excerpt_ja: '修士課程で研究を深める予定。',
    excerpt_en: 'A plan to deepen research at the master’s level.',
    excerpt_ko: '석사 과정에서 연구를 심화할 예정.',
    content_ja: [
      '修士課程でもThi Thi Zin 研究室に所属予定。',
      '研究をさらに深めていく予定です。'
    ],
    content_en: [
      'Planning to continue in the Thi Thi Zin Lab for my master’s program.',
      'I aim to deepen my research further.'
    ],
    content_ko: [
      '석사 과정에서도 Thi Thi Zin 연구실에 소속 예정.',
      '연구를 더 깊게 해나갈 예정입니다.'
    ],
    tags: ['Research', 'Plan'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'education-masters-completion-plan',
    title_ja: '修士修了（28卒予定）',
    title_en: 'Planned Master’s Completion (Mar 2028)',
    title_ko: '석사 수료(28졸 예정)',
    date: '2028-03-01',
    excerpt_ja: '修士課程修了予定の記録。',
    excerpt_en: 'A record of the planned master’s completion.',
    excerpt_ko: '석사 과정 수료 예정 기록.',
    content_ja: [
      '2028年3月に修士修了予定。',
      '研究成果をまとめ、次のステップにつなげる予定です。'
    ],
    content_en: [
      'Planned master’s completion in March 2028.',
      'I aim to compile my research results and move to the next step.'
    ],
    content_ko: [
      '2028년 3월 석사 과정 수료 예정.',
      '연구 성과를 정리해 다음 단계로 이어갈 예정입니다.'
    ],
    tags: ['Education', 'Plan'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'festival-kinect',
    title_ja: '学祭でKinectゲーム制作に挑戦',
    title_en: 'University Festival: Kinect Game Challenge',
    title_ko: '학제에서 Kinect 게임 제작 도전',
    date: '2023-03-01',
    excerpt_ja: '初めての学祭制作で得た気づき。',
    excerpt_en: 'Lessons from my first university festival project.',
    excerpt_ko: '첫 학제 제작에서 얻은 깨달음.',
    content_ja: [
      '大学1年の学祭でKinectを使ったゲーム制作に挑戦しました。',
      '結果はうまくいかず来場5人でしたが、企画と実装の難しさを学びました。'
    ],
    content_en: [
      'In my first year, I built a Kinect-based game for the university festival.',
      'It drew only five visitors, but I learned the challenges of planning and implementation.'
    ],
    content_ko: [
      '대학 1학년 학제에서 Kinect를 활용한 게임 제작에 도전했습니다.',
      '결과는 방문 5명으로 아쉬웠지만, 기획과 구현의 어려움을 배웠습니다.'
    ],
    tags: ['Festival', 'Project'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'festival-miyazaki-tower-battle',
    title_ja: '学祭「宮大タワーバトル」制作・出展',
    title_en: 'University Festival: “Miyazaki Tower Battle”',
    title_ko: '학제 “미야자키 타워 배틀” 제작·출전',
    date: '2024-03-01',
    excerpt_ja: '来場200人。改善を重ねた学祭プロジェクト。',
    excerpt_en: 'A festival project improved through iteration, with 200 visitors.',
    excerpt_ko: '방문 200명. 개선을 거듭한 학제 프로젝트.',
    content_ja: [
      '大学2年の学祭で「宮大タワーバトル」を制作・出展しました。',
      '前年の反省を踏まえて改善し、来場200人まで伸ばせました。'
    ],
    content_en: [
      'In my second year, I built and exhibited “Miyazaki Tower Battle.”',
      'We improved based on the previous year and reached 200 visitors.'
    ],
    content_ko: [
      '대학 2학년 학제에서 “미야자키 타워 배틀”을 제작·출전했습니다.',
      '전년도 반성을 바탕으로 개선해 방문 200명까지 늘릴 수 있었습니다.'
    ],
    tags: ['Festival', 'Project'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'mountain-shiraga',
    title_ja: '白髪岳 PW',
    title_en: 'Shiraga-dake PW',
    title_ko: '시라가다케 PW',
    date: '2022-10-30',
    excerpt_ja: 'ワンダーフォーゲル部での山行記録。',
    excerpt_en: 'A mountaineering record with the Wanderfogel club.',
    excerpt_ko: 'Wanderfogel 동아리 산행 기록.',
    content_ja: [
      '白髪岳への山行（PW）に参加。',
      '登山の準備と安全管理の大切さを学びました。'
    ],
    content_en: [
      'Joined the Shiraga-dake hike (PW).',
      'Learned the importance of preparation and safety management.'
    ],
    content_ko: [
      '시라가다케 산행(PW)에 참가.',
      '등산 준비와 안전 관리의 중요성을 배웠습니다.'
    ],
    tags: ['Mountaineering', 'Club'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'mountain-yakushima-miyanoura',
    title_ja: '屋久島・宮之浦岳（春合宿）',
    title_en: 'Yakushima / Miyanoura-dake (Spring Camp)',
    title_ko: '야쿠시마·미야노우라다케(봄 합숙)',
    date: '2023-03-31',
    excerpt_ja: '合宿での長時間行動とチームワーク。',
    excerpt_en: 'Long-duration activity and teamwork during the camp.',
    excerpt_ko: '합숙에서의 장시간 활동과 팀워크.',
    content_ja: [
      '春合宿として屋久島・宮之浦岳に参加しました。',
      '長時間行動の中で、チームワークの大切さを再認識しました。'
    ],
    content_en: [
      'Joined the spring camp to Yakushima and Miyanoura-dake.',
      'The long activity highlighted the importance of teamwork.'
    ],
    content_ko: [
      '봄 합숙으로 야쿠시마·미야노우라다케에 참가했습니다.',
      '장시간 활동 속에서 팀워크의 중요성을 다시 느꼈습니다.'
    ],
    tags: ['Mountaineering', 'Club'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'mountain-shaka',
    title_ja: '釈迦岳（大分・福岡）山行',
    title_en: 'Shaka-dake (Oita/Fukuoka) Hike',
    title_ko: '샤카다케(오이타/후쿠오카) 산행',
    date: '2023-05-28',
    excerpt_ja: '地形に応じたペース配分を意識した山行。',
    excerpt_en: 'A hike focused on pacing and terrain awareness.',
    excerpt_ko: '지형에 맞춘 페이스 배분을 의식한 산행.',
    content_ja: [
      '釈迦岳山行に参加。',
      '地形に応じたペース配分と安全確認の重要性を学びました。'
    ],
    content_en: [
      'Joined the Shaka-dake hike.',
      'Learned the importance of pacing and safety checks based on terrain.'
    ],
    content_ko: [
      '샤카다케 산행에 참가.',
      '지형에 맞춘 페이스 배분과 안전 확인의 중요성을 배웠습니다.'
    ],
    tags: ['Mountaineering', 'Club'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'mountain-tateyama',
    title_ja: '立山（夏合宿）',
    title_en: 'Tateyama (Summer Camp)',
    title_ko: '다테야마(여름 합숙)',
    date: '2023-08-20',
    excerpt_ja: '高所での行動と継続力を鍛えた合宿。',
    excerpt_en: 'A camp that strengthened endurance at high altitude.',
    excerpt_ko: '고지에서의 행동과 지속력을 단련한 합숙.',
    content_ja: [
      '立山での夏合宿に参加。',
      '高所環境での行動と継続力を鍛えられました。'
    ],
    content_en: [
      'Joined the summer camp at Tateyama.',
      'It strengthened endurance and adaptability in high-altitude conditions.'
    ],
    content_ko: [
      '다테야마 여름 합숙에 참가.',
      '고지 환경에서의 행동과 지속력을 단련했습니다.'
    ],
    tags: ['Mountaineering', 'Club'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'mountain-kaimon',
    title_ja: '開聞岳 登山',
    title_en: 'Kaimon-dake Hike',
    title_ko: '가이몬다케 등산',
    date: '2024-05-19',
    excerpt_ja: '安定したペース配分と安全確認の徹底。',
    excerpt_en: 'Consistent pacing and thorough safety checks.',
    excerpt_ko: '안정적인 페이스 배분과 안전 확인의 철저함.',
    content_ja: [
      '開聞岳登山に参加。',
      '安定したペース配分と安全確認の徹底を意識しました。'
    ],
    content_en: [
      'Joined the Kaimon-dake hike.',
      'Focused on steady pacing and thorough safety checks.'
    ],
    content_ko: [
      '가이몬다케 등산에 참가.',
      '안정적인 페이스 배분과 안전 확인의 철저함을 의식했습니다.'
    ],
    tags: ['Mountaineering', 'Club'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'mountain-yufu',
    title_ja: '由布岳 班PW',
    title_en: 'Yufu-dake Team PW',
    title_ko: '유후다케 팀 PW',
    date: '2024-11-10',
    excerpt_ja: '班行動での連携と役割分担を重視した山行。',
    excerpt_en: 'A team-based hike emphasizing coordination and roles.',
    excerpt_ko: '조별 활동에서의 협력과 역할 분담을 중시한 산행.',
    content_ja: [
      '由布岳の班PWに参加。',
      '班行動での連携と役割分担の重要性を学びました。'
    ],
    content_en: [
      'Joined the Yufu-dake team PW.',
      'It emphasized coordination and role-sharing in a group setting.'
    ],
    content_ko: [
      '유후다케 팀 PW에 참가.',
      '조별 활동에서의 협력과 역할 분담의 중요성을 배웠습니다.'
    ],
    tags: ['Mountaineering', 'Club'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'club-dotcube',
    title_ja: '学生団体 dotcube の活動記録',
    title_en: 'Activities in the dotcube Student Organization',
    title_ko: '학생단체 dotcube 활동 기록',
    date: '2024-03-01',
    excerpt_ja: '執行部としての取り組みや、企画・運営で得た学び。',
    excerpt_en: 'Reflections on leadership, planning, and execution as an executive member.',
    excerpt_ko: '집행부로서의 활동과 기획·운영에서 얻은 배움.',
    content_ja: [
      '学生団体dotcubeでは、執行部として活動を牽引しました。',
      '企画立案、運営、進行管理などを通じて、チームで成果を出すための基礎を身につけました。',
      '「誰にどんな価値を届けるか」を意識して活動できたことが大きな学びです。',
      '参考: https://dot-cube.github.io/ / https://github.com/dot-cube'
    ],
    content_en: [
      'In dotcube, I served as an executive member and led activities.',
      'Through planning, operations, and project management, I developed a foundation for delivering results as a team.',
      'The key lesson was focusing on “who we help” and “what value we deliver.”',
      'References: https://dot-cube.github.io/ / https://github.com/dot-cube'
    ],
    content_ko: [
      '학생단체 dotcube에서 집행부로 활동을 이끌었습니다.',
      '기획, 운영, 진행 관리 등을 통해 팀이 성과를 내기 위한 기반을 쌓았습니다.',
      '“누구에게 어떤 가치를 전달할지”를 의식하며 활동한 것이 큰 배움이었습니다.',
      '참고: https://dot-cube.github.io/ / https://github.com/dot-cube'
    ],
    tags: ['Club', 'Leadership', 'Student Org'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'club-dotcube-workshop',
    title_ja: 'dotcubeで小学生向けAI活用HP作成講座を実施',
    title_en: 'Teaching an AI Website Workshop for Elementary Students (dotcube)',
    title_ko: 'dotcube에서 초등학생 대상 AI 활용 홈페이지 제작 강좌 진행',
    date: '2024-03-08',
    excerpt_ja: '小学生向け講座の設計や、わかりやすく伝える工夫の振り返り。',
    excerpt_en: 'How I designed a workshop for children and simplified complex ideas.',
    excerpt_ko: '초등학생 대상 강좌 설계와 이해하기 쉽게 전달하는 방법에 대한 회고.',
    content_ja: [
      'dotcubeとして、小学生向けにAIを活用したHP作成講座を講師として実施しました。',
      '専門的な内容をかみ砕いて伝えるため、例えや体験型の構成を意識しました。',
      '相手の理解度に合わせて説明を調整する力が大きく伸びた経験です。',
      '参考: https://dot-cube.github.io/'
    ],
    content_en: [
      'As part of dotcube, I taught a workshop where elementary students built websites using AI tools.',
      'I focused on hands-on activities and simple analogies to make concepts approachable.',
      'It strengthened my ability to adjust explanations based on the audience’s understanding.',
      'References: https://dot-cube.github.io/'
    ],
    content_ko: [
      'dotcube로서 초등학생 대상 AI 활용 홈페이지 제작 강좌를 강사로 진행했습니다.',
      '전문적인 내용을 쉽게 전달하기 위해 비유와 체험형 구성을 의식했습니다.',
      '상대의 이해도에 맞춰 설명을 조정하는 능력이 크게 성장한 경험입니다.',
      '참고: https://dot-cube.github.io/'
    ],
    tags: ['Club', 'Education', 'AI'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'club-wanderfogel',
    title_ja: '宮崎大学ワンダーフォーゲル部の活動',
    title_en: 'Miyazaki University Wanderfogel Club',
    title_ko: '미야자키대학교 Wanderfogel부 활동',
    date: '2024-11-10',
    excerpt_ja: '山行・合宿を通じて得た継続力とチームワーク。',
    excerpt_en: 'Lessons in endurance and teamwork gained through trips and camps.',
    excerpt_ko: '산행·합숙을 통해 얻은 지속력과 팀워크.',
    content_ja: [
      'ワンダーフォーゲル部では、登山や合宿を通じて体力と継続力を鍛えました。',
      '自然の中での活動は、準備・判断・協力の重要性を実感する機会になりました。',
      '仲間と支え合いながら目標を達成する経験が、今の行動力につながっています。',
      '参考: https://muwv.yamagomori.com/ / https://x.com/miyadai_wangeru / https://www.instagram.com/myzk_u_wandervogel_club/'
    ],
    content_en: [
      'In the Wanderfogel club, I built endurance through hikes and camps.',
      'Outdoor activities reinforced the importance of preparation, decision-making, and teamwork.',
      'Achieving goals together strengthened my drive and resilience.',
      'References: https://muwv.yamagomori.com/ / https://x.com/miyadai_wangeru / https://www.instagram.com/myzk_u_wandervogel_club/'
    ],
    content_ko: [
      'Wanderfogel부에서는 등산과 합숙을 통해 체력과 지속력을 단련했습니다.',
      '자연 속 활동은 준비·판단·협력의 중요성을 체감하는 기회가 되었습니다.',
      '동료와 서로 돕며 목표를 달성한 경험이 현재의 실행력으로 이어지고 있습니다.',
      '참고: https://muwv.yamagomori.com/ / https://x.com/miyadai_wangeru / https://www.instagram.com/myzk_u_wandervogel_club/'
    ],
    tags: ['Club', 'Outdoor', 'Teamwork'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'part-time-lavie-en-rose',
    title_ja: 'アルバイト：ラヴィアンローズ（宮崎パフェバー）',
    title_en: 'Part-time: Lavie en Rose (Miyazaki Parfait Bar)',
    title_ko: '아르바이트: 라비앙 로즈(미야자키 파르페 바)',
    date: '2026-03-01',
    excerpt_ja: '接客とチームワークを通じて学んだこと、日々の改善の積み重ね。',
    excerpt_en: 'What I learned through customer service, teamwork, and daily improvements.',
    excerpt_ko: '접객과 팀워크를 통해 배운 것, 매일의 개선의 축적.',
    content_ja: [
      'ラヴィアンローズ（宮崎パフェバー）でのアルバイトを通じて、接客の基本とチーム連携の重要性を学びました。',
      '忙しい時間帯でも丁寧な対応を維持するため、動線や声かけのルールを整理して効率化しました。',
      '小さな改善の積み重ねが、サービス品質に直結することを実感できた経験でした。',
      '参考: https://www.instagram.com/l_rose310/ / https://tabelog.com/miyazaki/A4501/A450101/45009078/'
    ],
    content_en: [
      'My part-time work at Lavie en Rose (a parfait bar in Miyazaki) taught me the fundamentals of customer service and teamwork.',
      'To keep quality high during busy hours, I streamlined workflows and clarified communication rules.',
      'This experience showed me how small, consistent improvements directly raise service quality.',
      'References: https://www.instagram.com/l_rose310/ / https://tabelog.com/miyazaki/A4501/A450101/45009078/'
    ],
    content_ko: [
      '라비앙 로즈(미야자키 파르페 바)에서의 아르바이트를 통해 접객의 기본과 팀워크의 중요성을 배웠습니다.',
      '바쁜 시간에도 정중한 대응을 유지하기 위해 동선과 안내 규칙을 정리해 효율화했습니다.',
      '작은 개선의 축적이 서비스 품질에 직결된다는 것을 실감한 경험이었습니다.',
      '참고: https://www.instagram.com/l_rose310/ / https://tabelog.com/miyazaki/A4501/A450101/45009078/'
    ],
    tags: ['Part-time', 'Service', 'Teamwork'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'part-time-wowd-plus',
    title_ja: 'アルバイト：WOW’D PLUS',
    title_en: 'Part-time: WOW’D PLUS',
    title_ko: '아르바이트: WOW’D PLUS',
    date: '2026-02-01',
    excerpt_ja: '現場での対応力と、安定して成果を出すための工夫。',
    excerpt_en: 'On-site responsiveness and practices that help deliver consistent results.',
    excerpt_ko: '현장에서의 대응력과 안정적으로 성과를 내기 위한 노력.',
    content_ja: [
      'WOW’D PLUSでのアルバイトでは、現場での臨機応変な対応力が求められました。',
      'ミスを減らすためにチェックリストを作成し、作業の標準化を意識しました。',
      '安定して成果を出すために、準備と確認の重要性を再認識しました。',
      '参考: https://wowd-plus.com/'
    ],
    content_en: [
      'At WOW’D PLUS, I learned to respond quickly and flexibly to on-site situations.',
      'To reduce mistakes, I created checklists and worked to standardize tasks.',
      'This role reinforced how preparation and verification enable consistent results.',
      'References: https://wowd-plus.com/'
    ],
    content_ko: [
      'WOW’D PLUS에서의 아르바이트는 현장에서의 유연한 대응력이 요구되었습니다.',
      '실수를 줄이기 위해 체크리스트를 만들고 작업 표준화를 의식했습니다.',
      '안정적으로 성과를 내기 위해 준비와 확인의 중요성을 다시 인식했습니다.',
      '참고: https://wowd-plus.com/'
    ],
    tags: ['Part-time', 'Operations'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'part-time-round1',
    title_ja: 'アルバイト：ラウンドワン',
    title_en: 'Part-time: Round1',
    title_ko: '아르바이트: Round1',
    date: '2024-09-01',
    excerpt_ja: '接客・運営の経験から得た、現場での優先順位の付け方。',
    excerpt_en: 'How I learned to prioritize tasks through customer service and operations.',
    excerpt_ko: '접객·운영 경험을 통해 얻은 현장에서의 우선순위 설정.',
    content_ja: [
      'ラウンドワンでのアルバイトでは、複数の業務を並行して進める場面が多くありました。',
      '状況に応じて優先順位を付け、最優先タスクを見極める力が身につきました。',
      'ピーク時の対応やチーム連携を通して、判断力と協調性が鍛えられました。',
      '参考: https://www.round1-group.co.jp/ / https://www.round1.co.jp/company/company/info.html'
    ],
    content_en: [
      'At Round1, I frequently handled multiple tasks in parallel.',
      'I learned how to prioritize based on the situation and identify the most urgent tasks.',
      'Peak-hour operations and team coordination improved my decision-making and collaboration.',
      'References: https://www.round1-group.co.jp/ / https://www.round1.co.jp/company/company/info.html'
    ],
    content_ko: [
      'Round1에서의 아르바이트에서는 여러 업무를 병행하는 상황이 많았습니다.',
      '상황에 맞춰 우선순위를 정하고 가장 긴급한 업무를 파악하는 능력이 생겼습니다.',
      '피크 시간대 대응과 팀 협업을 통해 판단력과 협업 능력이 향상되었습니다.',
      '참고: https://www.round1-group.co.jp/ / https://www.round1.co.jp/company/company/info.html'
    ],
    tags: ['Part-time', 'Customer Service'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'part-time-smolt',
    title_ja: 'アルバイト：smolt',
    title_en: 'Part-time: smolt',
    title_ko: '아르바이트: smolt',
    date: '2023-03-01',
    excerpt_ja: '社会人基礎力を身につけるきっかけになった初めてのアルバイト。',
    excerpt_en: 'My first part-time job and a foundation for professional basics.',
    excerpt_ko: '사회인 기초 역량을 익히는 계기가 된 첫 아르바이트.',
    content_ja: [
      'smoltでのアルバイトは、社会人としての基礎を学ぶ最初の経験でした。',
      '時間厳守や報連相など、基本的な姿勢を身につけることができました。',
      'この経験が、その後の活動全体の土台になっています。',
      '参考: https://www.smolt.co.jp/'
    ],
    content_en: [
      'My part-time job at smolt was my first experience learning professional basics.',
      'I built habits around punctuality and clear reporting/communication.',
      'This experience became the foundation for my later activities.',
      'References: https://www.smolt.co.jp/'
    ],
    content_ko: [
      'smolt에서의 아르바이트는 사회인으로서의 기초를 배우는 첫 경험이었습니다.',
      '시간 엄수와 보고·연락·상담 등 기본적인 태도를 익힐 수 있었습니다.',
      '이 경험이 이후 활동 전반의 토대가 되었습니다.',
      '참고: https://www.smolt.co.jp/'
    ],
    tags: ['Part-time', 'Basics'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'award-gikyu-expo-qualifier',
    title_ja: '技育博 予選通過',
    title_en: 'Gikyu Expo Qualifier',
    title_ko: '기큐 박람회 예선 통과',
    date: '2025-04-01',
    excerpt_ja: '予選通過までのプロセスと、チームでの進め方の振り返り。',
    excerpt_en: 'How we approached the qualifier and what we learned as a team.',
    excerpt_ko: '예선 통과까지의 과정과 팀 진행 방식에 대한 회고.',
    content_ja: [
      '技育博の予選通過は、限られた時間で成果を出すための工夫が鍵でした。',
      '要件を素早く整理し、実装と検証を小さく回すことで完成度を高めました。',
      'チーム内の役割分担と共有の質が結果に直結することを実感しました。',
      '参考: https://talent.supporterz.jp/events/a3ee61b1-deb6-49cc-815e-a3a7df0fea17/ / https://note.supporterz.jp/n/n64ddd0708b48'
    ],
    content_en: [
      'Qualifying for Gikyu Expo required efficient execution within limited time.',
      'We improved quality by clarifying requirements early and iterating in small cycles.',
      'Clear role division and communication directly impacted our results.',
      'References: https://talent.supporterz.jp/events/a3ee61b1-deb6-49cc-815e-a3a7df0fea17/ / https://note.supporterz.jp/n/n64ddd0708b48'
    ],
    content_ko: [
      '기큐 박람회 예선 통과는 제한된 시간 안에 성과를 내기 위한 공夫가 핵심이었습니다.',
      '요구사항을 빠르게 정리하고 구현과 검증을 작은 사이클로 돌려 완성도를 높였습니다.',
      '팀 내 역할 분담과 공유의 질이 결과에 직결됨을 실감했습니다.',
      '참고: https://talent.supporterz.jp/events/a3ee61b1-deb6-49cc-815e-a3a7df0fea17/ / https://note.supporterz.jp/n/n64ddd0708b48'
    ],
    tags: ['Award', 'Hackathon', 'Team'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'award-gikyu-camp-vol23',
    title_ja: '技育CAMPハッカソン vol.23 参加',
    title_en: 'Gikyu CAMP Hackathon vol.23',
    title_ko: '기큐 CAMP 해커톤 vol.23 참가',
    date: '2025-02-01',
    excerpt_ja: '短期間での開発・意思決定のスピードを意識した参加記録。',
    excerpt_en: 'A record focused on fast development and decision-making under time constraints.',
    excerpt_ko: '단기간 개발·의사결정 속도를 의식한 참가 기록.',
    content_ja: [
      '技育CAMPハッカソン vol.23 では、短期間での開発と意思決定のスピードを意識しました。',
      '最小構成で価値を伝えるため、機能を絞り込みました。',
      '限られた時間の中での集中力と判断力が磨かれた経験です。',
      '参考: https://talent.supporterz.jp/events/a3b3fe7f-c1ae-4611-a949-caf057e69dd9/'
    ],
    content_en: [
      'At Gikyu CAMP Hackathon vol.23, I focused on fast development and decision-making.',
      'We narrowed scope to deliver a clear core value quickly.',
      'It was a valuable experience for sharpening focus under constraints.',
      'References: https://talent.supporterz.jp/events/a3b3fe7f-c1ae-4611-a949-caf057e69dd9/'
    ],
    content_ko: [
      '기큐 CAMP 해커톤 vol.23에서는 단기간 개발과 의사결정 속도를 의식했습니다.',
      '최소 구성으로 가치를 전달하기 위해 기능을 좁혔습니다.',
      '제한된 시간 속에서 집중력과 판단력을 갈고닦은 경험입니다.',
      '참고: https://talent.supporterz.jp/events/a3b3fe7f-c1ae-4611-a949-caf057e69dd9/'
    ],
    tags: ['Hackathon', 'Experience'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'award-miyazaki-hackathon-2nd',
    title_ja: '第二回 宮崎ハッカソン 最優秀賞',
    title_en: '2nd Miyazaki Hackathon — Grand Prize',
    title_ko: '제2회 미야자키 해커톤 최우수상',
    date: '2024-09-25',
    excerpt_ja: '課題設定からプロトタイプ完成までの短期集中の学び。',
    excerpt_en: 'Key lessons from fast problem framing to prototype delivery.',
    excerpt_ko: '과제 설정부터 프로토타입 완성까지의 단기 집중 학습.',
    content_ja: [
      '第二回 宮崎ハッカソンでは、課題設定とプロトタイプ設計に注力しました。',
      '短期間でも「誰の何を解決するか」を明確にすることで、実装の質が上がることを実感しました。',
      '結果として最優秀賞をいただき、大きな自信につながりました。'
    ],
    content_en: [
      'At the 2nd Miyazaki Hackathon, we focused on problem framing and prototype design.',
      'Clarifying “who” and “what to solve” early improved implementation quality.',
      'Winning the grand prize became a major confidence boost.'
    ],
    content_ko: [
      '제2회 미야자키 해커톤에서는 과제 설정과 프로토타입 설계에 집중했습니다.',
      '짧은 기간이라도 “누구의 무엇을 해결할지”를 명확히 하면 구현의 질이 올라간다는 것을 실감했습니다.',
      '결과적으로 최우수상을 수상하며 큰 자신감으로 이어졌습니다.'
    ],
    tags: ['Award', 'Hackathon'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'award-miyazaki-ds-competition',
    title_ja: '宮崎大学データサイエンスコンペ 最優秀賞',
    title_en: 'Miyazaki Univ. Data Science Competition — Grand Prize',
    title_ko: '미야자키대학교 데이터사이언스 컴페티션 최우수상',
    date: '2024-02-29',
    excerpt_ja: 'データの見方・分析の手順を整理して評価につなげた経験。',
    excerpt_en: 'How structured analysis and clear interpretation led to strong results.',
    excerpt_ko: '데이터 해석과 분석 절차를 정리해 성과로 연결한 경험.',
    content_ja: [
      '宮崎大学データサイエンスコンペでは、データの前処理と分析の手順を整理しました。',
      '仮説を立てて検証する流れを明確にし、結果の説明可能性を重視しました。',
      '分析の筋道が評価につながり、最優秀賞を受賞しました。',
      '参考: https://www.miyazaki-u.ac.jp/miyazaki-mds/news-topics/report/1531/ / https://www.miyazaki-u.ac.jp/public-relations/20240221_04_press.pdf'
    ],
    content_en: [
      'In the Miyazaki University Data Science Competition, I structured preprocessing and analysis steps.',
      'I emphasized a clear hypothesis→validation flow and interpretability of results.',
      'That approach contributed to winning the grand prize.',
      'References: https://www.miyazaki-u.ac.jp/miyazaki-mds/news-topics/report/1531/ / https://www.miyazaki-u.ac.jp/public-relations/20240221_04_press.pdf'
    ],
    content_ko: [
      '미야자키대학교 데이터사이언스 컴페티션에서는 데이터 전처리와 분석 절차를 정리했습니다.',
      '가설을 세우고 검증하는 흐름을 명확히 하며 결과의 설명 가능성을 중시했습니다.',
      '분석의 논리가 평가로 이어져 최우수상을 수상했습니다.',
      '참고: https://www.miyazaki-u.ac.jp/miyazaki-mds/news-topics/report/1531/ / https://www.miyazaki-u.ac.jp/public-relations/20240221_04_press.pdf'
    ],
    tags: ['Award', 'Data Science'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'award-miyazaki-hackathon-1st',
    title_ja: '宮崎ハッカソン 最優秀賞',
    title_en: 'Miyazaki Hackathon — Grand Prize',
    title_ko: '미야자키 해커톤 최우수상',
    date: '2024-02-16',
    excerpt_ja: '短期間でのチーム開発と発表に集中した記録。',
    excerpt_en: 'A focused record of teamwork, fast development, and pitching.',
    excerpt_ko: '단기간 팀 개발과 발표에 집중한 기록.',
    content_ja: [
      '宮崎ハッカソンでは、短期間での開発と発表に集中しました。',
      'タスク分担と短いフィードバックループで完成度を上げることを意識しました。',
      '最優秀賞を受賞し、チームで成果を出す経験の価値を再認識しました。',
      '参考: https://karabiner-inc.notion.site/2024-2-15-16-23918a41d5204e738c26217c9de28507'
    ],
    content_en: [
      'At the Miyazaki Hackathon, we focused on rapid development and presentation.',
      'Clear task division and tight feedback loops improved quality.',
      'Winning the grand prize reinforced the value of teamwork and execution.',
      'References: https://karabiner-inc.notion.site/2024-2-15-16-23918a41d5204e738c26217c9de28507'
    ],
    content_ko: [
      '미야자키 해커톤에서는 단기간 개발과 발표에 집중했습니다.',
      '업무 분담과 짧은 피드백 루프로 완성도를 높이는 것을 의식했습니다.',
      '최우수상을 수상하며 팀으로 성과를 내는 경험의 가치를 다시 인식했습니다.',
      '참고: https://karabiner-inc.notion.site/2024-2-15-16-23918a41d5204e738c26217c9de28507'
    ],
    tags: ['Award', 'Hackathon'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'step3-suncheon',
    title_ja: '韓国・順天大学校 STEP3 短期派遣留学の記録',
    title_en: 'Study Abroad at Sunchon National University (STEP3)',
    title_ko: '한국 순천대학교 STEP3 단기 파견 유학 기록',
    date: '2024-08-28',
    excerpt_ja: '8日間の短期派遣で学んだこと、現地での気づき、英語環境での学びの振り返り。',
    excerpt_en: 'Reflections on an 8-day study abroad program, insights from local experiences, and learning in an English environment.',
    excerpt_ko: '8일간의 단기 파견에서 배운 것, 현지의 깨달음, 영어 환경에서의 학습 회고.',
    content_ja: [
      '2024年8月に、韓国・順天大学校のSTEP3短期派遣留学に参加しました。期間は8日間と短いながらも、集中して学びと交流に取り組めたのが大きな収穫でした。',
      '英語での授業やディスカッションに参加し、言語面の課題を実感しつつも、自分の意見を整理して伝える力が伸びたと感じます。',
      '現地の学生との交流を通じて、学習スタイルや価値観の違いに触れられたことも印象的でした。短期でも「異文化に飛び込む体験」は大きな学びになります。',
      'この経験を通じて、今後の学習や研究でも「実践の場で使う」意識を持って学ぶ大切さを再認識しました。',
      '参考: https://www.miyazaki-u.ac.jp/sekaten/notices/2024/09/content.html'
    ],
    content_en: [
      'In August 2024, I joined the STEP3 short-term program at Sunchon National University in Korea. Although it was only 8 days, it was intense and highly rewarding.',
      'Participating in English lectures and discussions highlighted my language challenges, but also helped me improve how I organize and communicate ideas.',
      'Connecting with local students gave me a fresh perspective on different learning styles and values. Even a short program can provide meaningful cross-cultural learning.',
      'This experience reminded me to keep a practical, real-world mindset in future study and research.',
      'References: https://www.miyazaki-u.ac.jp/sekaten/notices/2024/09/content.html'
    ],
    content_ko: [
      '2024년 8월 한국 순천대학교 STEP3 단기 파견 유학에 참여했습니다. 기간은 8일로 짧았지만, 집중해서 학습과 교류에 임할 수 있었던 것이 큰 수확이었습니다.',
      '영어 수업과 토론에 참여하며 언어적 과제를 느꼈지만, 의견을 정리해 전달하는 능력이 향상되었다고 느꼈습니다.',
      '현지 학생들과의 교류를 통해 학습 방식과 가치관의 차이를 접한 것도 인상적이었습니다. 단기라도 “이문화에 뛰어드는 경험”은 큰 배움이 됩니다.',
      '이 경험을 통해 앞으로의 학습과 연구에서도 “실전에서 사용한다”는 의식을 가지고 배우는 중요성을 다시 인식했습니다.',
      '참고: https://www.miyazaki-u.ac.jp/sekaten/notices/2024/09/content.html'
    ],
    tags: ['Study Abroad', 'Korea', 'Learning'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'ali-6920',
    title_ja: 'ALI 6920（Academic Research）オンライン受講の学び',
    title_en: 'Lessons from ALI 6920 (Academic Research) Online Sessions',
    title_ko: 'ALI 6920(Academic Research) 온라인 수강에서의 배움',
    date: '2024-03-15',
    excerpt_ja: 'IUPのオンラインプログラムで取り組んだアカデミックリサーチの学びとアウトプットの振り返り。',
    excerpt_en: 'A recap of the academic research sessions in the IUP online program and key takeaways.',
    excerpt_ko: 'IUP 온라인 프로그램에서 진행한 학술 연구의 배움과 결과물 회고.',
    content_ja: [
      '2024年3月にIUP（ALI）の「ALI 6920（Academic Research）」をオンラインで受講しました。実施日は3/1、3/8、3/15の3回です。',
      '学術的な文章の構成、根拠の示し方、引用の扱いなど、リサーチの基礎を集中的に学べたことが大きな収穫でした。',
      '短時間のセッションでも、問いの立て方や論理の組み立て方に対する意識が変わったのは大きいです。',
      '今後の研究やアウトプットでも、根拠と構造を意識して伝える姿勢を継続していきます。'
    ],
    content_en: [
      'In March 2024, I attended the “ALI 6920 (Academic Research)” sessions online through IUP (ALI). The sessions were held on 3/1, 3/8, and 3/15.',
      'The biggest takeaway was learning the fundamentals of academic writing: structure, evidence, and proper citation practices.',
      'Even in short sessions, my approach to forming research questions and building arguments improved.',
      'I plan to carry these skills into future research and writing, focusing on clarity and evidence-based structure.'
    ],
    content_ko: [
      '2024년 3월 IUP(ALI)의 “ALI 6920(Academic Research)”을 온라인으로 수강했습니다. 진행일은 3/1, 3/8, 3/15의 3회입니다.',
      '학술 글의 구성, 근거 제시 방법, 인용 처리 등 리서치의 기초를 집중적으로 배운 것이 큰 수확이었습니다.',
      '짧은 세션이었지만 질문 설정과 논리 전개에 대한 인식이 달라진 것은 큰 변화였습니다.',
      '앞으로의 연구와 결과물에서도 근거와 구조를 의식해 전달하는 자세를 이어가겠습니다.'
    ],
    tags: ['Study Abroad', 'Academic', 'Research'],
    image: '/og/blog-design-system.svg'
  },
  {
    id: 'iup-ali-online',
    title_ja: 'IUP（ALI）オンライン留学の体験と学び',
    title_en: 'My Experience in the IUP (ALI) Online Study Abroad Program',
    title_ko: 'IUP(ALI) 온라인 유학의 경험과 배움',
    date: '2024-03-29',
    excerpt_ja: 'Virtual classesでの学び、言語面の課題、オンライン留学の良さをまとめました。',
    excerpt_en: 'A summary of virtual classes, language challenges, and what worked well in an online study abroad program.',
    excerpt_ko: '온라인 수업에서의 배움, 언어적 과제, 온라인 유학의 장점을 정리했습니다.',
    content_ja: [
      '2024年2月〜3月にかけて、米国IUP（Indiana University of Pennsylvania）のALIオンライン留学を受講しました。',
      'オンラインであっても、英語環境に身を置くことで「聞いて理解する」「自分の言葉で返す」力が鍛えられたと感じます。',
      '時差や学習環境の調整など難しさもありましたが、短期集中で学べたのは大きなメリットでした。',
      '対面留学とは違う形でも、目的を持って学ぶことで十分に価値のある経験になると実感しました。'
    ],
    content_en: [
      'From February to March 2024, I participated in the ALI online study abroad program at IUP (Indiana University of Pennsylvania).',
      'Even in a virtual setting, learning in an English environment improved my listening and response skills.',
      'Managing time zones and study conditions was challenging, but the short, focused format made learning efficient.',
      'I realized that online study abroad can still be highly valuable when approached with clear goals.'
    ],
    content_ko: [
      '2024년 2~3월, 미국 IUP(Indiana University of Pennsylvania)의 ALI 온라인 유학을 수강했습니다.',
      '온라인이라도 영어 환경에 놓이면서 “듣고 이해하기”, “내 말로 답하기” 능력이 단련되었다고 느꼈습니다.',
      '시차와 학습 환경 조정 등 어려움도 있었지만, 단기 집중으로 배울 수 있었던 것이 큰 장점이었습니다.',
      '대면 유학과는 다른 형태라도, 목적을 가지고 학습하면 충분히 가치 있는 경험이 된다는 것을 실감했습니다.'
    ],
    tags: ['Study Abroad', 'Online', 'English'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'ai-agent-challenge-2026',
    title_ja: 'AI Agent Challenge 2026 に参加した話 — 初体験の環境構築から感想戦まで',
    title_en: 'AI Agent Challenge 2026 — First Setup, Implementation, and Retrospective',
    title_ko: 'AI Agent Challenge 2026 참가 후기 — 첫 환경 구축부터 회고까지',
    date: '2026-02-16',
    excerpt_ja: 'Claude Code と MCP の初実戦で、環境構築の壁、採点フロー、実装戦略の学びを整理した記録。',
    excerpt_en: 'A practical recap of my first hands-on use of Claude Code and MCP, including setup issues, scoring flow, and implementation strategy.',
    excerpt_ko: 'Claude Code와 MCP를 처음 실전에서 사용하며 겪은 환경 구축 이슈, 채점 흐름, 구현 전략의 배움을 정리한 기록.',
    content_ja: [
      '【はじめに】',
      '2026年2月に開催された AI Agent Challenge 2026 に参加しました。Claude Code と MCP を触るのは初めてで、環境構築から学びが多い大会でした。',
      '【大会の仕組み】',
      '・テンプレートリポジトリから自分のリポジトリを作成',
      '・ローカルで Docker / Make で環境を起動',
      '・scoreboard リポジトリに登録して Issue で /score を実行',
      '・GitHub Actions で採点結果を受け取る',
      '【環境構築で苦労した点】',
      'claude コマンドが見つからず、npm install -g @anthropic-ai/claude-code を実行してセットアップしました。',
      'その後は claude でログインし、実行環境を整えました。',
      'Docker デーモン未起動の状態で Cannot connect to the Docker daemon at unix:///.../docker.sock が出て、Docker Desktop 起動で解消しました。',
      '【/score までの流れ】',
      '・make up を実行',
      '・curl localhost:8080 と curl localhost:3100 で起動確認',
      '・採点用 Issue を作成して本文に /score を投稿',
      '・CI 上で採点が走り、結果が返る',
      'ローカルで動作しても /score を実行しないと採点に反映されない点が重要でした。',
      '【感想戦：C 言語で挑んだ学び】',
      'C を選んだ理由は低レイヤー理解を深めたかったからですが、実装速度では Python が有利だと実感しました。',
      'JWT は C だと実装や連携が重く、Python は PyJWT ですぐ扱えました。',
      'bcrypt は C だと依存管理の負担が大きく、Python は bcrypt ライブラリで短時間に実装できました。',
      'JSON は C だと手動パース寄りになり、Python は json 標準機能で完結しやすいです。',
      'HTTP は C だと自前実装の比率が上がり、Python は FastAPI で立ち上げが速いです。',
      '【結果と次回戦略】',
      '最終順位は 55位 / 1:24:12 でした。',
      '次回は Python で先にスコアを出し、make up までのセットアップ自動化と早期 /score 確認を徹底します。',
      '【関連リンク】',
      '大会公式: https://cyberagent.connpass.com/event/',
      'Podcast: https://open.spotify.com/episode/27GV87BnFHQJcxS2bZqZE7?si=9pAsIzb6jOncDtg'
    ],
    content_en: [
      '【Introduction】',
      'I participated in AI Agent Challenge 2026 in February 2026. It was my first hands-on experience with Claude Code and MCP, and setup itself became a major learning point.',
      '【How the Challenge Worked】',
      '・Create a repository from the template',
      '・Start services locally with Docker and Make',
      '・Register on the scoreboard repository and run /score in an Issue',
      '・Receive scoring results from GitHub Actions',
      '【Setup Issues I Hit】',
      'The claude command was missing at first, so I installed it with npm install -g @anthropic-ai/claude-code.',
      'After that, I logged in with claude and prepared the environment.',
      'I also hit Cannot connect to the Docker daemon at unix:///.../docker.sock, which was fixed by starting Docker Desktop.',
      '【Flow to Reach /score】',
      '・Run make up',
      '・Verify services with curl localhost:8080 and curl localhost:3100',
      '・Create a scoring Issue and post /score',
      '・Wait for CI scoring results',
      'The key point was that local success did not count until /score was executed on CI.',
      '【Retrospective: Why C Was Valuable but Slow】',
      'I chose C to deepen low-level understanding, but Python was clearly faster for implementation speed.',
      'JWT in C required heavier implementation and integration, while Python was quick with PyJWT.',
      'bcrypt in C increased dependency overhead, while Python worked quickly with the bcrypt library.',
      'JSON handling in C leaned toward manual parsing, while Python was straightforward with the standard json module.',
      'HTTP in C required more custom server work, while Python could start quickly with FastAPI.',
      '【Result and Next Strategy】',
      'My final result was 55th place with a time of 1:24:12.',
      'Next time, I will prioritize early scoring with Python, automate setup to make up, and verify /score as early as possible.',
      '【Related Links】',
      'Official event: https://cyberagent.connpass.com/event/',
      'Podcast: https://open.spotify.com/episode/27GV87BnFHQJcxS2bZqZE7?si=9pAsIzb6jOncDtg'
    ],
    content_ko: [
      '【소개】',
      '2026년 2월에 열린 AI Agent Challenge 2026에 참가했습니다. Claude Code와 MCP를 처음 실전에서 사용했고, 환경 구축 자체가 큰 학습이었습니다.',
      '【대회 진행 방식】',
      '・템플릿 저장소에서 개인 저장소 생성',
      '・로컬에서 Docker / Make로 환경 실행',
      '・scoreboard 저장소에 등록 후 Issue에서 /score 실행',
      '・GitHub Actions 채점 결과 확인',
      '【환경 구축에서 어려웠던 점】',
      '처음에 claude 명령어가 없어 npm install -g @anthropic-ai/claude-code 로 설치했습니다.',
      '그다음 claude 로 로그인하고 실행 환경을 정리했습니다.',
      '또한 Cannot connect to the Docker daemon at unix:///.../docker.sock 오류를 만났고, Docker Desktop을 실행해 해결했습니다.',
      '【/score까지의 흐름】',
      '・make up 실행',
      '・curl localhost:8080 과 curl localhost:3100 으로 기동 확인',
      '・채점용 Issue 생성 후 본문에 /score 입력',
      '・CI 채점 결과 확인',
      '로컬에서 동작해도 CI에서 /score를 실행하지 않으면 점수에 반영되지 않는 점이 핵심이었습니다.',
      '【회고: C 언어로 도전하며 배운 점】',
      '저수준 이해를 위해 C를 선택했지만, 구현 속도는 Python이 확실히 유리했습니다.',
      'JWT는 C에서 구현과 연동 부담이 컸고, Python은 PyJWT로 빠르게 처리할 수 있었습니다.',
      'bcrypt는 C에서 의존성 관리 부담이 컸고, Python은 bcrypt 라이브러리로 빠르게 구현할 수 있었습니다.',
      'JSON은 C에서 수동 파싱 성격이 강했고, Python은 표준 json 모듈로 정리가 쉬웠습니다.',
      'HTTP는 C에서 직접 구현 비중이 높았고, Python은 FastAPI로 빠르게 시작할 수 있었습니다.',
      '【결과와 다음 전략】',
      '최종 결과는 55위, 1:24:12였습니다.',
      '다음에는 Python으로 먼저 점수를 확보하고, make up까지의 셋업 자동화와 조기 /score 검증을 우선하겠습니다.',
      '【관련 링크】',
      '공식 이벤트: https://cyberagent.connpass.com/event/',
      '팟캐스트: https://open.spotify.com/episode/27GV87BnFHQJcxS2bZqZE7?si=9pAsIzb6jOncDtg'
    ],
    tags: ['AI', 'Coding Challenge', 'Claude', 'MCP', 'Docker', 'GitHub Actions'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'designing-for-ai',
    title_ja: 'AI時代のUI設計',
    title_en: 'Designing UI for the AI Era',
    title_ko: 'AI 시대의 UI 설계',
    date: '2026-02-15',
    excerpt_ja: 'AI機能を組み込む際の情報設計と、ユーザーの期待値を調整するためのUIガイドライン。',
    excerpt_en: 'UI guidelines for setting user expectations when adding AI-driven features.',
    excerpt_ko: 'AI 기능을 추가할 때 사용자 기대치를 조정하기 위한 UI 가이드라인.',
    content_ja: [
      'AI機能を導入すると、ユーザーは「何ができるか」を過度に期待しがちです。まずは機能範囲を明確にし、入力例や制約条件を示すことで安心感を与える必要があります。',
      '回答の信頼性を担保するため、根拠や参考情報へのリンクを用意すると、説明責任を果たしやすくなります。',
      '最後に、失敗ケースのUIも重要です。曖昧な回答に対しては「再入力」「要約」「他の切り口を試す」などの導線を必ず用意します。'
    ],
    content_en: [
      'When you introduce AI features, users tend to overestimate what the system can do. Clarify the boundaries early and provide input examples and constraints to build trust.',
      'To improve reliability, include references or links that explain why the AI produced a result. This makes the output more accountable and transparent.',
      'Finally, design for failure. If the output is vague, offer clear next steps like “refine input,” “summarize,” or “try another angle.”'
    ],
    content_ko: [
      'AI 기능을 도입하면 사용자는 “무엇을 할 수 있는가”를 과도하게 기대하기 쉽습니다. 먼저 기능 범위를 명확히 하고 입력 예시와 제약 조건을 제시해 안심감을 줄 필요가 있습니다.',
      '응답의 신뢰성을 담보하기 위해 근거와 참고 정보 링크를 제공하면 설명 책임을 다하기 쉬워집니다.',
      '마지막으로 실패 케이스 UI도 중요합니다. अस्प한 답변에는 “재입력”, “요약”, “다른 접근 시도” 등의 동선을 반드시 마련합니다.'
    ],
    tags: ['UI/UX', 'AI', 'Product'],
    image: '/og/blog-designing-for-ai.svg'
  },
  {
    id: 'performance-first-portfolio',
    title_ja: 'ポートフォリオを高速化する3つの工夫',
    title_en: '3 Tactics to Speed Up a Portfolio Site',
    title_ko: '포트폴리오를 빠르게 만드는 3가지 방법',
    date: '2026-01-28',
    excerpt_ja: '画像・アニメーション・構成の整理で、体験を損なわずに軽量化する方法。',
    excerpt_en: 'How to keep a portfolio fast by tuning images, motion, and layout.',
    excerpt_ko: '이미지·애니메이션·구성 정리로 경험을 해치지 않고 가볍게 만드는 방법.',
    content_ja: [
      'まずはLCP（Largest Contentful Paint）を意識し、ヒーロー画像や主要テキストの表示を最優先にします。',
      'アニメーションは「優先順位」と「条件付き表示」を設けることで、体験を損なわず負荷を下げられます。',
      '最後に、不要なJSやスタイルの整理が重要です。使っていないコンポーネントは削除し、CSSを整理します。'
    ],
    content_en: [
      'Prioritize LCP by rendering hero visuals and primary copy first.',
      'Add conditions to animations (e.g., reduced motion or mobile checks) so you keep the wow factor without hurting performance.',
      'Finally, remove unused JS and styles. Slimming down the bundle often gives the biggest win.'
    ],
    content_ko: [
      '먼저 LCP(Largest Contentful Paint)를 의식해 히어로 이미지와 주요 텍스트 표시를 최우선으로 합니다.',
      '애니메이션은 “우선순위”와 “조건부 표시”를 두면 경험을 해치지 않고 부하를 낮출 수 있습니다.',
      '마지막으로 불필요한 JS와 스타일 정리가 중요합니다. 사용하지 않는 컴포넌트를 제거하고 CSS를 정리합니다.'
    ],
    tags: ['Performance', 'Frontend'],
    image: '/og/blog-performance.svg'
  },
  {
    id: 'design-system-consistency',
    title_ja: 'デザインシステムで一貫性を保つ',
    title_en: 'Keeping Consistency with Design Systems',
    title_ko: '디자인 시스템으로 일관성 유지',
    date: '2025-12-12',
    excerpt_ja: 'UIの一貫性と開発効率を両立するために必要な設計ルール。',
    excerpt_en: 'Rules that keep UI consistent and improve dev velocity.',
    excerpt_ko: 'UI 일관성과 개발 효율을 모두 달성하기 위한 설계 규칙.',
    content_ja: [
      'デザインシステムは「誰が使っても同じ品質になる」ことが重要です。命名規則とガイドラインを整備し、迷いを減らします。',
      '特に余白、色、タイポグラフィはトークン化し、各チームが同じ言語で話せるようにします。',
      '最後に、更新ルールを設けてBreaking Changesの影響範囲を明確にします。'
    ],
    content_en: [
      'A design system should deliver consistent quality regardless of who uses it. Clear naming and documentation reduce ambiguity.',
      'Spacing, color, and typography should be tokenized so teams share the same vocabulary.',
      'Define a release process for breaking changes so teams can plan updates confidently.'
    ],
    content_ko: [
      '디자인 시스템은 “누가 사용해도 같은 품질”이 되는 것이 중요합니다. 명명 규칙과 가이드라인을 정비해 고민을 줄입니다.',
      '특히 여백, 색상, 타이포그래피는 토큰화해 각 팀이 같은 언어로 이야기할 수 있게 합니다.',
      '마지막으로 업데이트 규칙을 두어 Breaking Changes의 영향 범위를 명확히 합니다.'
    ],
    tags: ['Design System', 'UI/UX'],
    image: '/og/blog-design-system.svg'
  }
];

export const getPostById = (id: string) => posts.find((post) => post.id === id);
