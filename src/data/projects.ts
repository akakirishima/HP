export type Project = {
    id: string;
    title: string;
    desc_ja: string;
    desc_en: string;
    desc_ko: string;
    longDesc_ja: string;
    longDesc_en: string;
    longDesc_ko: string;
    challenges_ja: string[];
    challenges_en: string[];
    challenges_ko: string[];
    tags: string[];
    color: string;
    liveUrl?: string; // URL for iframe embed
    repoUrl?: string;
    year: string;
    image?: string;
};

export const projects: Project[] = [
    {
        id: 'deepself-tree',
        title: 'DeepSelf Tree',
        desc_ja: '自己分析を深掘りするための分岐型ツール。質問に答えていくことで自分自身を発見できる。',
        desc_en: 'A branching tool for deep self-analysis. Discover yourself by answering thought-provoking questions.',
        desc_ko: '자기 분석을 깊게 하기 위한 분기형 도구. 질문에 답하며 자신을 발견할 수 있습니다.',
        longDesc_ja: `DeepSelf Treeは、就活や自己理解のための「分岐型自己分析ツール」です。

ユーザーが入力した回答に対して深掘りの質問が次々と生成され、ツリー構造で自分の思考を可視化できます。
一人で使うだけでなく、共有機能でリンクを送ることで、友人やメンターからも質問してもらえる「共同自己分析」が可能です。`,
        longDesc_en: `DeepSelf Tree is a "branching self-analysis tool" designed for job hunting and self-understanding.

When users input their answers, follow-up questions are generated one after another, allowing them to visualize their thoughts in a tree structure.
Beyond solo use, the sharing feature enables "collaborative self-analysis" where friends and mentors can also ask questions via a shared link.`,
        longDesc_ko: `DeepSelf Tree는 취업 준비와 자기 이해를 위한 '분기형 자기 분석 도구'입니다.

사용자가 입력한 답변에 대해 심화 질문이 연속적으로 생성되어 트리 구조로 사고를 시각화할 수 있습니다.
혼자 사용하는 것뿐 아니라 공유 기능으로 링크를 보내면 친구나 멘토가 질문을 추가하는 '공동 자기 분석'이 가능합니다.`,
        challenges_ja: [
            'ツリー構造のデータ設計と再帰的レンダリングの実装が複雑だった',
            'Supabaseのリアルタイム同期とRLS（Row Level Security）の設計に苦労した',
            '共有機能のゲストアクセス権限管理が難しかった',
            'モバイル対応のツリー表示で、見やすさとインタラクションのバランス調整に時間がかかった'
        ],
        challenges_en: [
            'Designing the tree data structure and implementing recursive rendering was complex',
            'Struggled with Supabase real-time sync and RLS (Row Level Security) design',
            'Managing guest access permissions for the sharing feature was challenging',
            'Balancing readability and interaction for mobile tree display took significant time'
        ],
        challenges_ko: [
            '트리 구조 데이터 설계와 재귀 렌더링 구현이 복잡했다',
            'Supabase 실시간 동기화와 RLS(Row Level Security) 설계에 어려움이 있었다',
            '공유 기능의 게스트 접근 권한 관리가 어려웠다',
            '모바일 트리 표시에서 가독성과 인터랙션의 균형을 맞추는 데 시간이 걸렸다'
        ],
        tags: ['React', 'TypeScript', 'Supabase'],
        color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        liveUrl: 'https://v0-self-analysis-tool.vercel.app',
        year: '2026',
        image: '/og/project-deepself-tree.svg'
    },
    {
        id: 'portfolio-site',
        title: 'Portfolio Site',
        desc_ja: 'モダンなデザインと多言語対応を備えたポートフォリオサイト。',
        desc_en: 'A modern portfolio website with multilingual support and stunning animations.',
        desc_ko: '모던한 디자인과 다국어 지원을 갖춘 포트폴리오 사이트.',
        longDesc_ja: `このサイト自体がこのプロジェクトです！

東大松尾研究室のWebサイトを参考に、アカデミックかつ先進的な印象を与えるデザインを目指しました。
日本語・英語の切り替え、グラデーションを活かしたUI、Three.jsによる背景アニメーションなどを実装しています。`,
        longDesc_en: `This site itself is this project!

I aimed to create a design that gives an academic yet cutting-edge impression, inspired by the University of Tokyo's Matsuo Lab website.
Features include Japanese/English switching, gradient-based UI, and background animations using Three.js.`,
        longDesc_ko: `이 사이트 자체가 이 프로젝트입니다!

도쿄대 마쓰오 연구실 웹사이트를 참고해 학구적이면서도 진보적인 인상을 주는 디자인을 목표로 했습니다.
일본어/영어 전환, 그라데이션 UI, Three.js 배경 애니메이션 등을 구현했습니다.`,
        challenges_ja: [
            '国際化(i18n)の設計で、型安全性を保ちながらシンプルな実装を目指した',
            'Three.jsのシェーダーでパフォーマンスと見た目のバランス調整',
            'レスポンシブ対応でハンバーガーメニューの挙動調整'
        ],
        challenges_en: [
            'Designed i18n while maintaining type safety with a simple implementation',
            'Balanced performance and visuals with Three.js shaders',
            'Adjusted hamburger menu behavior for responsive design'
        ],
        challenges_ko: [
            '국제화(i18n) 설계에서 타입 안정성을 유지하며 단순한 구현을 목표로 했다',
            'Three.js 셰이더에서 성능과 비주얼의 균형 조정',
            '반응형 대응에서 햄버거 메뉴 동작을 조정'
        ],
        tags: ['React', 'Vite', 'Three.js', 'i18n'],
        color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        liveUrl: 'https://hp-six-beryl.vercel.app',
        repoUrl: 'https://github.com/akakirishima/HP',
        year: '2026',
        image: '/og/project-portfolio-site.svg'
    },
    {
        id: 'cocktail-memory',
        title: 'cocktail-memory',
        desc_ja: 'カクテルのレシピを選択式で覚える学習アプリ。',
        desc_en: 'A learning app for memorizing cocktail recipes through selectable quiz-style practice.',
        desc_ko: '선택식 퀴즈로 칵테일 레시피를 외우는 학습 앱입니다.',
        longDesc_ja: `cocktail-memoryは、カクテルのレシピを「グラス」「作り方」「材料」「分量」などの選択式で覚える学習アプリです。

練習画面では画像付きのパレットから材料を選び、レシピ知識を反復しながら確認できます。
Next.js / React / TypeScript で構成し、レシピデータのカタログ生成やUIテスト用スクリプトも用意しています。`,
        longDesc_en: `cocktail-memory is a learning app for memorizing cocktail recipes by selecting the glass, method, ingredients, and amounts.

The practice screen uses image-backed palettes so users can repeatedly check recipe knowledge through interaction.
It is built with Next.js, React, and TypeScript, with scripts for generating recipe catalogs and checking UI behavior.`,
        longDesc_ko: `cocktail-memory는 글라스, 제조 방식, 재료, 분량을 선택하면서 칵테일 레시피를 외우는 학습 앱입니다.

연습 화면에서는 이미지가 있는 팔레트에서 재료를 선택하며 반복적으로 레시피 지식을 확인할 수 있습니다.
Next.js / React / TypeScript로 구성했고, 레시피 카탈로그 생성과 UI 동작 확인 스크립트도 포함했습니다.`,
        challenges_ja: [
            'レシピデータを選択式UIで扱いやすいカタログ構造に整理した',
            '画像付きの材料パレットを、スマホでも操作しやすいレイアウトに調整した',
            'Next.jsのビルド前処理でレシピカタログを生成する構成にした'
        ],
        challenges_en: [
            'Organized recipe data into a catalog structure suitable for selectable UI flows',
            'Adjusted the image-backed ingredient palette for comfortable mobile interaction',
            'Built a prebuild flow that generates the recipe catalog before the Next.js build'
        ],
        challenges_ko: [
            '레시피 데이터를 선택식 UI에 맞는 카탈로그 구조로 정리했습니다',
            '이미지 기반 재료 팔레트를 모바일에서도 조작하기 쉽게 조정했습니다',
            'Next.js 빌드 전에 레시피 카탈로그를 생성하는 구성으로 만들었습니다'
        ],
        tags: ['Next.js', 'React', 'TypeScript'],
        color: 'linear-gradient(135deg, #7c2d12 0%, #f97316 55%, #fde68a 100%)',
        liveUrl: 'https://cocktail-memory-tube.vercel.app',
        repoUrl: 'https://github.com/akakirishima/cocktail-memory',
        year: '2026'
    },
    {
        id: 'hellonewme',
        title: 'Hellonewme',
        desc_ja: 'AIキャラクターとの対話から日記と自己成長の記録が育つ新しい日記アプリ。',
        desc_en: 'A new diary app where conversations with an AI character grow into daily reflections and self-growth records.',
        desc_ko: 'AI 캐릭터와의 대화가 일기와 자기 성장 기록으로 이어지는 새로운 일기 앱입니다.',
        longDesc_ja: `Hellonewmeは、AIキャラクターとの会話、音声、写真を通じて、日々の行動や気持ちを自然に記録できる新しい日記アプリです。

会話内容は日次サマリーとして再構成され、翌朝のひとこと、日記、キャラクター画像の変化として返ってきます。
「記録を書く」負担を減らし、自分の変化をキャラクターの成長として見返せる体験を目指しました。`,
        longDesc_en: `Hellonewme is a new diary app that helps users naturally record daily actions and emotions through conversations, voice, and photos with an AI character.

Conversations are reconstructed into daily summaries and returned as morning messages, diary entries, and changes in the character's image.
The goal is to reduce the burden of writing records and make self-growth visible as the character evolves.`,
        longDesc_ko: `Hellonewme는 AI 캐릭터와의 대화, 음성, 사진을 통해 매일의 행동과 감정을 자연스럽게 기록할 수 있는 새로운 일기 앱입니다.

대화 내용은 일일 요약으로 재구성되고, 다음 날 아침의 한마디, 일기, 캐릭터 이미지 변화로 돌아옵니다.
기록을 쓰는 부담을 줄이고, 자신의 변화를 캐릭터의 성장으로 돌아볼 수 있는 경험을 목표로 했습니다.`,
        challenges_ja: [
            'FlutterアプリとCloud Run上のTypeScript / Expressバックエンドを連携した',
            'Gemini、Speech-to-Text、Text-to-Speechを組み合わせ、チャット・音声・日記生成をつないだ',
            '03:00 JSTを日付境界にして、深夜の振り返りも自然に扱える日記体験を設計した',
            '会話や写真の内容を日次サマリー、吹き出し、キャラクター画像更新へ反映する流れを作った'
        ],
        challenges_en: [
            'Connected a Flutter app with a TypeScript / Express backend running on Cloud Run',
            'Combined Gemini, Speech-to-Text, and Text-to-Speech to link chat, voice, and diary generation',
            'Designed a diary experience with a 03:00 JST date boundary so late-night reflections still feel natural',
            'Built a flow that reflects conversations and photos into daily summaries, bubbles, and character image updates'
        ],
        challenges_ko: [
            'Flutter 앱과 Cloud Run의 TypeScript / Express 백엔드를 연동했습니다',
            'Gemini, Speech-to-Text, Text-to-Speech를 조합해 채팅, 음성, 일기 생성을 연결했습니다',
            '03:00 JST를 날짜 경계로 두어 심야 회고도 자연스럽게 다루는 일기 경험을 설계했습니다',
            '대화와 사진 내용을 일일 요약, 말풍선, 캐릭터 이미지 업데이트로 반영하는 흐름을 만들었습니다'
        ],
        tags: ['Flutter', 'Dart', 'Firebase', 'Gemini', 'Cloud Run'],
        color: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #38bdf8 100%)',
        liveUrl: 'https://hello-new-me.vercel.app',
        year: '2026'
    },
    {
        id: 'sample-reels',
        title: 'sample-reels',
        desc_ja: 'サンプルをリール形式で表示するFlutterアプリ。',
        desc_en: 'A Flutter app that displays samples in a reels-style interface.',
        desc_ko: '샘플을 릴스 형식으로 보여주는 Flutter 앱입니다.',
        longDesc_ja: `sample-reelsは、技育ハッカソンでチーム開発した、サンプルをリール形式で表示するアプリです。

Flutter / Dart を使って、スマホで見やすい縦スクロール型の体験を作ることを目指しました。
Firebase 連携を見据え、データ管理やチーム開発のブランチ運用も含めて設計しています。`,
        longDesc_en: `sample-reels is a team-developed hackathon app that displays samples in a reels-style interface.

Built with Flutter and Dart, it focuses on a mobile-friendly vertical browsing experience.
The project was designed with Firebase-backed data management and team branch workflows in mind.`,
        longDesc_ko: `sample-reels는 기큐 해커톤에서 팀으로 개발한, 샘플을 릴스 형식으로 보여주는 앱입니다.

Flutter / Dart를 사용해 모바일에서 보기 쉬운 세로 스크롤 경험을 만드는 것을 목표로 했습니다.
Firebase 연동을 고려해 데이터 관리와 팀 개발 브랜치 운영까지 포함해 설계했습니다.`,
        challenges_ja: [
            'Flutterでリール形式の縦スクロールUIを構成した',
            'チーム開発を前提に、develop / feature ブランチ運用を整理した',
            'Firebase連携を見据えたデータ管理の構成を検討した'
        ],
        challenges_en: [
            'Built a reels-style vertical scrolling UI with Flutter',
            'Organized develop and feature branch workflows for team development',
            'Planned a data-management structure with Firebase integration in mind'
        ],
        challenges_ko: [
            'Flutter로 릴스 형식의 세로 스크롤 UI를 구성했습니다',
            '팀 개발을 전제로 develop / feature 브랜치 운영을 정리했습니다',
            'Firebase 연동을 고려한 데이터 관리 구성을 검토했습니다'
        ],
        tags: ['Flutter', 'Dart', 'Firebase'],
        color: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 55%, #7c3aed 100%)',
        repoUrl: 'https://github.com/taishi29/sample-reels',
        year: '2025'
    },
    {
        id: 'comchecker',
        title: 'ComChecker',
        desc_ja: '宮崎の企業をgood / badで選び、自分の好みに合う企業を見つけるWebサイト。',
        desc_en: 'A web app for discovering Miyazaki companies by choosing good or bad preferences.',
        desc_ko: '미야자키 기업을 good / bad로 선택하며 취향에 맞는 기업을 찾는 웹사이트입니다.',
        longDesc_ja: `ComCheckerは、宮崎の企業を表示し、good / bad の選択を通じて自分の好みに合う企業を探すハッカソン制作のWebサイトです。

バックエンドは Django、データベースは SQLite を利用し、フロント側は React を想定した構成です。
企業選びを直感的な操作に落とし込むことを目的に、初期バージョンとして実装しました。`,
        longDesc_en: `ComChecker is a hackathon web app for browsing Miyazaki companies and finding companies that match personal preferences through good / bad choices.

It uses Django on the backend and SQLite for the database, with a frontend structure intended for React.
The initial version focuses on turning company discovery into a simple, intuitive interaction.`,
        longDesc_ko: `ComChecker는 미야자키 기업을 보여주고 good / bad 선택을 통해 취향에 맞는 기업을 찾는 해커톤 제작 웹사이트입니다.

백엔드는 Django, 데이터베이스는 SQLite를 사용했고 프론트엔드는 React 구성을 전제로 했습니다.
기업 탐색을 직관적인 조작으로 바꾸는 것을 목표로 초기 버전을 구현했습니다.`,
        challenges_ja: [
            'DjangoとSQLiteで企業情報を扱う基礎構成を作った',
            'good / bad の選択で好みを絞り込む体験を設計した',
            'ハッカソンの短時間でバックエンドとフロントエンドの役割を整理した'
        ],
        challenges_en: [
            'Built the basic Django and SQLite structure for handling company information',
            'Designed a preference-narrowing experience using good / bad choices',
            'Separated backend and frontend responsibilities under hackathon time constraints'
        ],
        challenges_ko: [
            'Django와 SQLite로 기업 정보를 다루는 기본 구성을 만들었습니다',
            'good / bad 선택으로 취향을 좁혀가는 경험을 설계했습니다',
            '해커톤의 짧은 시간 안에서 백엔드와 프론트엔드 역할을 정리했습니다'
        ],
        tags: ['Django', 'React', 'SQLite', 'Python'],
        color: 'linear-gradient(135deg, #14532d 0%, #16a34a 55%, #bbf7d0 100%)',
        repoUrl: 'https://github.com/taishi29/ComChecker',
        year: '2024'
    },
    {
        id: 'helloworld-lab-system',
        title: 'HelloWorld',
        desc_ja: '研究室向けの在室・勤怠・日誌管理システム。',
        desc_en: 'A lab presence, attendance, and daily log management system.',
        desc_ko: '연구실용 재실, 근태, 일지 관리 시스템입니다.',
        longDesc_ja: `HelloWorldは、研究室内で使うことを想定した在室状況・勤怠・日誌管理システムです。

フロントエンドは Vite + React + TypeScript、バックエンドは FastAPI + SQLite で構成しています。
Raspberry Pi 上で動かし、研究室LAN内からアクセスする運用を前提に、ログイン、在室状態、勤怠、日誌を扱えるようにしました。`,
        longDesc_en: `HelloWorld is a presence, attendance, and daily log management system designed for use inside a university lab.

The frontend is built with Vite, React, and TypeScript, while the backend uses FastAPI and SQLite.
It is intended to run on a Raspberry Pi and be accessed from the lab LAN, covering login, presence status, attendance, and daily logs.`,
        longDesc_ko: `HelloWorld는 연구실 내부에서 사용하는 것을 전제로 한 재실, 근태, 일지 관리 시스템입니다.

프론트엔드는 Vite + React + TypeScript, 백엔드는 FastAPI + SQLite로 구성했습니다.
Raspberry Pi에서 실행하고 연구실 LAN 안에서 접근하는 운영을 전제로 로그인, 재실 상태, 근태, 일지를 다룰 수 있게 했습니다.`,
        challenges_ja: [
            'ReactフロントエンドとFastAPIバックエンドを分離して設計した',
            'Raspberry Piと研究室LAN内運用を前提にアクセス方法を整理した',
            '管理者とメンバーの権限を分け、在室・勤怠・日誌の基本機能を構成した'
        ],
        challenges_en: [
            'Separated the React frontend and FastAPI backend cleanly',
            'Designed the access flow around Raspberry Pi deployment inside a lab LAN',
            'Structured admin/member permissions and core presence, attendance, and log features'
        ],
        challenges_ko: [
            'React 프론트엔드와 FastAPI 백엔드를 분리해 설계했습니다',
            'Raspberry Pi와 연구실 LAN 내부 운영을 전제로 접근 방식을 정리했습니다',
            '관리자와 멤버 권한을 나누고 재실, 근태, 일지의 기본 기능을 구성했습니다'
        ],
        tags: ['React', 'TypeScript', 'FastAPI', 'SQLite'],
        color: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 55%, #99f6e4 100%)',
        repoUrl: 'https://github.com/akakirishima/HelloWorld',
        year: '2026'
    },
    {
        id: 'record-baby-in-nicu',
        title: 'recordBabyinNICU',
        desc_ja: 'Intel RealSense L515でDepth、IR、RGBを記録するPythonスクリプト群。',
        desc_en: 'Python scripts for recording Depth, IR, and RGB streams with Intel RealSense L515.',
        desc_ko: 'Intel RealSense L515로 Depth, IR, RGB 스트림을 기록하는 Python 스크립트입니다.',
        longDesc_ja: `recordBabyinNICUは、Intel RealSense L515 を使って NICU 環境で Depth、IR、RGB の各ストリームを記録するための Python スクリプト群です。

Depth は HDF5、IR / RGB は MP4 として保存し、一定時間ごとにファイルを分割できる構成にしています。
公開リポジトリでは録画コードのみを扱い、患者データや録画済みデータセットは含めていません。`,
        longDesc_en: `recordBabyinNICU is a set of Python scripts for recording Depth, IR, and RGB streams in a NICU environment using Intel RealSense L515.

Depth is saved as HDF5 while IR and RGB are saved as MP4, with support for time-based file splitting.
The public repository contains recording code only and does not include patient data or recorded datasets.`,
        longDesc_ko: `recordBabyinNICU는 Intel RealSense L515를 사용해 NICU 환경에서 Depth, IR, RGB 스트림을 기록하기 위한 Python 스크립트입니다.

Depth는 HDF5, IR/RGB는 MP4로 저장하며, 일정 시간마다 파일을 분할할 수 있는 구성입니다.
공개 저장소에는 녹화 코드만 포함하고 환자 데이터나 녹화 데이터셋은 포함하지 않았습니다.`,
        challenges_ja: [
            'Depth、IR、RGBの複数ストリームを同時に扱う録画処理を構成した',
            '欠損リスクを抑えるため、安定優先プロファイルと保存優先度を設計した',
            '研究用途を想定し、出力フォルダとセッション情報の保存形式を整理した'
        ],
        challenges_en: [
            'Built recording logic that handles multiple Depth, IR, and RGB streams at once',
            'Designed stable profiles and save priorities to reduce dropped-frame risk',
            'Organized output folders and session metadata for research use'
        ],
        challenges_ko: [
            'Depth, IR, RGB 복수 스트림을 동시에 다루는 녹화 처리를 구성했습니다',
            '프레임 누락 위험을 줄이기 위해 안정 우선 프로파일과 저장 우선순위를 설계했습니다',
            '연구 용도를 고려해 출력 폴더와 세션 정보 저장 형식을 정리했습니다'
        ],
        tags: ['Python', 'RealSense', 'OpenCV', 'HDF5'],
        color: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 52%, #93c5fd 100%)',
        repoUrl: 'https://github.com/akakirishima/recordBabyinNICU',
        year: '2025'
    },
    {
        id: 'my-app',
        title: 'my-app',
        desc_ja: 'Dockerで動くフロントエンド + バックエンド構成のアプリ。',
        desc_en: 'A Docker-based full-stack app with separate frontend and backend services.',
        desc_ko: 'Docker로 실행되는 프론트엔드 + 백엔드 구성의 앱입니다.',
        longDesc_ja: `my-appは、Docker Compose だけで起動できるフロントエンド + バックエンド構成のアプリです。

フロントエンドとAPIを別サービスとして分け、ローカルに Node や Python を直接入れなくても動かせるようにしています。
README では初回セットアップ、2回目以降の起動、ログ確認、依存追加、ポート競合時の対応まで整理しています。`,
        longDesc_en: `my-app is a full-stack app that can be started with Docker Compose alone.

The frontend and API are split into separate services so it can run without installing Node or Python directly on the local machine.
The README documents initial setup, repeat startup, logs, dependency installation, and port-conflict handling.`,
        longDesc_ko: `my-app은 Docker Compose만으로 실행할 수 있는 프론트엔드 + 백엔드 구성의 앱입니다.

프론트엔드와 API를 별도 서비스로 분리해 로컬에 Node나 Python을 직접 설치하지 않아도 실행할 수 있게 했습니다.
README에는 초기 설정, 두 번째 이후 실행, 로그 확인, 의존성 추가, 포트 충돌 대응까지 정리했습니다.`,
        challenges_ja: [
            'Docker Composeでフロントエンドとバックエンドを一括起動できる構成にした',
            'macOSのポート競合を避けるため、API公開ポートを整理した',
            'チームメンバーが迷わず起動できるよう、READMEに運用手順をまとめた'
        ],
        challenges_en: [
            'Created a Docker Compose setup that starts both frontend and backend services',
            'Adjusted exposed API ports to avoid common macOS port conflicts',
            'Documented operational steps so other developers can start the project smoothly'
        ],
        challenges_ko: [
            'Docker Compose로 프론트엔드와 백엔드를 함께 실행할 수 있게 구성했습니다',
            'macOS의 포트 충돌을 피하기 위해 API 공개 포트를 정리했습니다',
            '팀원이 쉽게 실행할 수 있도록 README에 운영 절차를 정리했습니다'
        ],
        tags: ['Docker', 'React', 'TypeScript', 'Python'],
        color: 'linear-gradient(135deg, #111827 0%, #4b5563 52%, #d1d5db 100%)',
        repoUrl: 'https://github.com/akakirishima/my-app',
        year: '2025'
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find(p => p.id === id);
}
