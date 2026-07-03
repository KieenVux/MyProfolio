/* Japanese Portfolio */

export const settings = {
  isSplash: false,
};

export const seo = {
  title: "ヴー・チュン・キエン | ポートフォリオ",
  description:
    "3年以上の実務経験を持つソフトウェアエンジニア。スケーラブルなバックエンドシステムやマイクロサービスの設計・構築・デプロイを得意としています。将来的にはブリッジSE（BrSE）やプロジェクトマネージャー（PM）を目指しています。",
  og: {
    title: "Vu Trung Kien Portfolio",
    type: "website",
    url: "https://my-cv-theta.vercel.app/",
  },
};

export const greeting = {
  title: "ヴー・チュン・キエン",
  logo_name: "Vu Trung Kien",
  nickname: "キエン",
  subTitle:
    "3年以上の実務経験を持つソフトウェアエンジニアです。スケーラブルなバックエンドシステムやマイクロサービスの設計・構築・デプロイを得意としています（Node.js, NestJS, AWS 等）。将来的には、技術力とコミュニケーション能力を活かし、ブリッジSE（BrSE）やプロジェクトマネージャー（PM）として活躍することを目指しています。",
  resumeLink: "/履歴書_職務経歴書_VuTrungKien.pdf",
};

export const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/KieenVux?tab=repositories",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:trungkienks8@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

export const skills = {
  data: [
    {
      title: "フルスタック開発",
      fileName: "FullStackImg",
      skills: [
        "⚡ SQL、MySQL、PostgreSQL、MongoDB、Redis の実践的な経験",
        "⚡ Web API の経験 (RESTful、GraphQL、マイクロサービス)",
        "⚡ GitHub、GitLab、Docker、サーバーへのデプロイ、Github Actions による CI/CD、AWS",
        "⚡ フロントエンド: ReactJs、Svelte、HTML、Angular",
        "⚡ バックエンド: NestJS、ExpressJS、PHP(Laravel)、Go(Echo)、.Net",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: { color: "#E0234E" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
      ],
    },
  ],
};

export const competitiveSites = {
  competitiveSites: [],
};

export const degrees = {
  degrees: [
    {
      title: "FPTダナン 大学",
      subtitle: "ソフトウェアエンジニアリング 学士",
      logo_path: "fpt_logo.svg",
      alt_name: "FPT",
      duration: "10/2018 - 10/2022",
      descriptions: [
        "⚡ 学位: 卒業",
        "⚡ FPT大学サッカートーナメント 優勝 (チャンピオン)",
      ],
    },
  ],
};

export const certifications = {
  certifications: [],
};

export const experience = {
  title: "職務経歴",
  subtitle: "職務経歴",
  description:
    "フルスタック・バックエンド開発を中心に、複雑な要件定義・DB設計・高パフォーマンスなアプリケーション構築まで幅広い実績を持つソフトウェアエンジニアです。",
  header_image_path: "experience.svg",
  companies: [
    {
      name: "株式会社 Hamanoya（浜の家）",
      role: "フルスタックエンジニア",
      duration: "2025年9月 - 現在",
      color: "#0879bf",
      logo_path: "hamanoya_logo.jpg",
      projects: [
        {
          id: "luana-oluolu",
          name: "Luana'olu'olu — ECサイト",
          duration: "2025年9月 - 2025年12月",
          description:
            "1人開発者としてゼロから構築した、デザート＆冷凍食品専門のECサイト。",
          projectLinks: {
            website: "https://luana-olu-olu.vercel.app/",
            userManual: "/LuanaOluOlu-introduction.pdf"
          },
          techStack: [
            "TypeScript",
            "NestJS",
            "PostgreSQL",
            "HTML",
            "RESTful API",
            "AWS",
            "Docker",
            "GitHub Actions",
          ],
          responsibilities: [
            "要件定義からデプロイまで一貫して担当",
            "商品・カテゴリ・注文・会員情報のCRUD機能開発",
            "LINEログイン・リッチメニュー・メッセージ連携の実装",
            "fincodeクレジットカード決済の導入",
            "AWSインフラ構築：EC2、S3、CodeBuild、ECR、R53",
          ],
          extendedDetails: {
            features: [
              "顧客向けストアフロントと管理者ポータルを分離するデュアルWebアプリアーキテクチャ",
              "LINE SSOログインによるスムーズなオンボーディングとチェックアウト",
              "fincodeを使用したPCI準拠の決済ゲートウェイ統合",
              "LINE Messaging APIを介してプッシュされる自動注文レシート",
              "完全に自動化されたAWS CI/CDパイプライン（CodePipeline、CodeBuild、ECR）",
            ],
            userRoles: [
              {
                role: "顧客",
                details: [
                  "デザートや冷凍食品の製品カタログの閲覧",
                  "ショッピングカートの管理とfincodeを介したクレジットカード決済の完了",
                  "LINE経由でのスムーズなログインと注文履歴の追跡",
                ],
              },
              {
                role: "管理者 / ストアマネージャー",
                details: [
                  "製品/カテゴリの作成および更新による在庫管理",
                  "保留中（PENDING）の注文の監視および処理",
                  "フルフィルメントステータスを出荷済み（SHIPPED）に更新し、顧客に自動通知",
                ],
              },
            ],
            apiFlows: [
              {
                title: "LINE SSO 認証フロー (ストアフロント)",
                description:
                  "顧客が「LINEでログイン」をクリック → NestJSが認証コードをアクセストークンと交換 → line_idを介してユーザーを更新（Upsert） → JWTを返す。",
              },
              {
                title:
                  "チェックアウト & Fincode決済Webhookフロー (ストアフロント)",
                description:
                  "注文作成（PENDING） → Fincode経由で決済インテント作成 → 非同期Webhookが決済を完了 → 注文をPAIDに更新し、在庫を差し引く。",
              },
              {
                title: "注文フルフィルメントフロー (管理者ポータル)",
                description:
                  "管理者がPAIDの注文を確認 → SHIPPEDとしてマーク → NestJSがLINE Messaging APIをトリガーして顧客に通知。",
              },
            ],
            techDetails:
              "単一のNestJS RESTful APIとPostgreSQLをバックエンドに持つデュアルHTML/JS Webアプリ。SSO/メッセージングにLINE API、決済にfincodeを統合。Dockerでコンテナ化され、自動化されたCodePipeline CI/CDワークフローを介してAWS EC2にデプロイ。",
            engineeringChallenges: [
              {
                title: "決済のためのアトミックなデータベーストランザクション",
                description:
                  "PostgreSQLトランザクションを使用して競合状態を防ぎ、Fincodeからの非同期決済の確実なキャプチャ後にのみ在庫の差し引きが行われるようにしました。",
              },
              {
                title: "デュアルフロントエンドのCORSおよび認証管理",
                description:
                  "安全なCORSポリシーを設定し、JWT認証戦略を分離して、2つの異なるフロントエンドが1つのバックエンドと安全にやり取りできるようにしました。",
              },
              {
                title: "自動化されたAWS CI/CDパイプライン",
                description:
                  "CodeBuild、ECR、およびEC2を使用してダウンタイムなしのデプロイメントパイプラインを構築し、プラットフォーム全体のリリースの自動化を実現しました。",
              },
            ],
            systemArchitecture: [
              {
                title: "概要",
                description:
                  "中央のNestJSバックエンドを持つデュアルフロントエンドアーキテクチャ。ALB、EC2、RDS、S3、およびRoute53を利用してAWSインフラストラクチャ上でホスト。",
              },
              {
                title: "フロントエンド (HTML/JS)",
                description:
                  "分離された顧客向けストアフロント（モバイル最適化されたチェックアウト）と管理者ポータル（在庫/注文管理）。",
              },
              {
                title: "バックエンドコア & AWS",
                description:
                  "REST APIとWebhookを処理するNestJS。Docker化されEC2にデプロイ。Amazon RDSでホストされるPostgreSQLデータベース。",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/luana-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/luana-images/er_diagram.png`,
            },
          },
        },
        {
          id: "internal-app",
          name: "社内アプリ — お知らせ・フィードバック",
          duration: "2025年12月 - 現在",
          description:
            "お知らせ・ニュース・方針・マニュアルの配信および従業員フィードバック収集を行う社内向けアプリを単独で新規開発。",
          techStack: ["TypeScript", "NestJS", "MySQL", "RESTful API", "Svelte"],
          responsibilities: [
            "要件定義からデプロイまで一人で担当",
            "管理者向け：お知らせ・ニュース・方針の作成/編集/公開機能",
            "従業員向け：コンテンツ閲覧・意見/フィードバック投稿UI",
            "DBスキーマ設計とバックエンドサービスアーキテクチャの構築",
          ],
          extendedDetails: {
            features: [
              "SvelteKitとTiptapによる動的なリッチテキストコミュニケーションエンジン",
              "バックエンドでのID除去による安全で匿名の意見・フィードバックループ",
              "重要なお知らせのためのリアルタイムLINE WORKS一斉送信",
              "Passport-JWTによるロールベースのアクセス制御（RBAC）",
              "XSERVERとPM2によるダウンタイムなしのデプロイメントパイプライン",
            ],
            userRoles: [
              {
                role: "管理者 / マネージャー",
                details: [
                  "リッチテキストでのニュース、お知らせ、方針の作成、編集、公開",
                  "従業員のユーザーアカウント管理と階層的な役割の割り当て",
                  "自動化されたLINE WORKSの一斉送信通知のトリガー",
                  "匿名の従業員フィードバックワークフローの確認と追跡",
                ],
              },
              {
                role: "従業員 (ユーザー)",
                details: [
                  "社内ニュースの閲覧と方針/マニュアルライブラリへのアクセス",
                  "「匿名」プライバシートグルを備えた意見やフィードバックの送信",
                  "方針に埋め込まれた添付ファイルやメディアのダウンロード",
                  "従業員コードによる安全なログイン",
                ],
              },
            ],
            apiFlows: [
              {
                title: "コンテンツ公開およびLINE WORKS一斉送信フロー",
                description:
                  "管理者がTiptapでコンテンツを作成 → NestJSがサニタイズしてMySQLに保存 → LINE WORKSのWebhookをトリガー → 従業員のLINEアカウントに通知を一斉送信。",
              },
              {
                title: "安全な匿名フィードバックフロー",
                description:
                  "従業員が匿名フラグ（isAnonymus）付きで意見を送信 → NestJSがJWTユーザーコンテキストを完全に除去 → 内部告発者を保護するため匿名レコードとしてDBに保存。",
              },
              {
                title: "JWT RBAC 認証フロー",
                description:
                  "従業員コードでログイン → 認証情報の検証 → 厳格なロールペイロードを含むJWTを生成 → 以降の非同期リクエストを認証。",
              },
            ],
            techDetails:
              "NestJS REST APIと通信するSvelteKit SPA。TypeORMで最適化されたMySQLデータベース。GitHub Actionsを介してXSERVERにデプロイされ、プロセス管理にPM2、即時メッセージングにLINE WORKS APIを利用。",
            engineeringChallenges: [
              {
                title: "LINE WORKS APIの統合",
                description:
                  "メインのNestJS HTTPスレッドをブロックすることなく、信頼性の高い一斉送信メッセージングをトリガーする非同期Webhookメカニズムを開発しました。",
              },
              {
                title: "複雑なリッチテキストデータの処理",
                description:
                  "Tiptapによって生成された複雑なJSON/HTMLステートを、SvelteKitフロントエンドとNestJSバックエンド間で管理、サニタイズ、提供するシームレスなフローを設計しました。",
              },
              {
                title: "フィードバックの絶対的な匿名性の保証",
                description:
                  "機密性の高い人事報告のための100%の匿名性を確保するため、意見（opinions）テーブルからIDコンテキストを厳格に分離するデータベースとバックエンドロジックを設計しました。",
              },
            ],
            systemArchitecture: [
              {
                title: "概要",
                description:
                  "SvelteKitフロントエンドとNestJSバックエンドによる2層アーキテクチャ。PM2によって管理されるXSERVER Linux環境でホストされ、外部のLINE WORKS APIと統合されています。",
              },
              {
                title: "フロントエンド (SvelteKit)",
                description:
                  "動的なUI生成、リッチテキストブロック編集（Tiptap）、およびメディアアップロードを処理します。",
              },
              {
                title: "バックエンド (NestJS)",
                description:
                  "REST API、TypeORMを介したMySQLトランザクション、および非同期LINE WORKS Webhookトリガーを処理する、PM2でクラスター化されたNode.jsサーバー。",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/internal-app-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/internal-app-images/er_diagram.png`,
            },
          },
        },
      ],
    },
    {
      name: "株式会社 Finviet",
      role: "バックエンドエンジニア",
      duration: "2024年6月 - 2025年5月",
      color: "#9b1578",
      logo_path: "finviet_logo.png",
      projects: [
        {
          id: "finviet-dms",
          name: "ECODMS — 流通管理システム",
          duration: "2024年6月 - 2024年12月",
          description:
            "複数倉庫・販売チャネルにまたがる商品流通・在庫追跡・注文管理を効率化するDMS。",
          techStack: [
            "NestJS",
            "Socket.io",
            "RESTful",
            "MongoDB",
            "Redis",
            "マイクロサービス",
          ],
          responsibilities: [
            "営業チェックイン機能の保守・最適化: 朝のピーク時における大量のリクエストにも耐えうるよう、GPS位置情報バリデーションを含むコアAPIのパフォーマンスを最適化しました。",
            "KPI集計パイプラインの管理: CQRSアーキテクチャとRabbitMQを活用し、毎日数千件のイベントを処理して、個人・チーム向けのリアルタイムKPI（日/週/月）を正確に算出するエンジンを管理しました。",
            "非同期データエクスポート: Bull Queueを用いたバックグラウンド処理により、注文データや割り当てルートの大量データエクスポート機能を開発し、システムの応答性を向上させました。",
            "将来のルート計画機能: 営業担当者のKPI目標に基づき、将来の店舗訪問スケジュールを効率的にクエリ・計画できるモジュールを実装しました。",
            "本番環境のバグ修正・安定化: 代理店変更時のルート再割り当てにおける複雑なデータ不整合問題などを解決し、システムの安定性・整合性を確保しました。",
          ],
          extendedDetails: {
            githubDocs: {
              architecture:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/architecture.md",
              erDiagram:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/er-diagram.md",
              functionalMap:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/functional-map.md",
              apiFlows:
                "https://github.com/your-username/MyProfolio/tree/main/Finviet/ECODMS/docs/api-flow.md",
            },
            features: [
              "GPS認証による営業担当者数千人のチェックイン・チェックアウト機能",
              "日次・週次・月次のKPI目標をリアルタイムで追跡・集計するエンジン",
              "数百万件のレコードを高速処理するCQRSレポートパイプライン",
              "毎晩の自動クロンジョブによるデータバックアップ、ZIPレポート生成、および7つのPM2インスタンス間のデータ同期",
            ],
            userTypes: [
              {
                role: "Sales (営業担当者)",
                details: [
                  "販売店でのチェックイン（GPS位置情報による認証）",
                  "KPI目標に基づいた訪問予定店舗のルート作成・管理（CRUD）",
                  "新規・既存加盟店の作成および管理",
                  "訪問時の割り当てタスク（アンケート、写真撮影、注文）の実行",
                  "個人のKPI（日次/週次/月次）の確認",
                ],
              },
              {
                role: "Manager Sale (グループ管理者)",
                details: [
                  "チームのチェックイン状況を監視する概要ダッシュボード",
                  "割り当てリストに対する加盟店訪問状況の追跡",
                  "グループ内の各営業担当者の個人KPIの確認",
                ],
              },
              {
                role: "Manager (シニア管理者)",
                details: [
                  "営業グループ全体のKPI追跡（集計ビュー）",
                  "グループおよび個人に対するKPI目標の割り当て",
                  "全体的なレポート作成（日次/月次サマリー）",
                ],
              },
              {
                role: "Merchant (販売店/加盟店 - モバイルアプリ)",
                details: [
                  "ディストリビューターへの直接商品注文",
                  "在庫状況の確認",
                ],
              },
            ],
            apiFlows: [
              {
                title: "営業のチェックイン＆店舗訪問",
                description:
                  "ルートを開く → GPSチェックイン → タスク実行 → 写真撮影 → アンケート → チェックアウト。",
              },
              {
                title: "ルートプランニング",
                description:
                  "KPI目標の確認 → ルート計画の作成 → 今後の訪問店舗の選択 → システムによる検証。",
              },
              {
                title: "CQRS KPI集計パイプライン",
                description:
                  "データ収集 → report-write-service → RabbitMQ → report-kpi-serviceで集計 → report-read-serviceが高速ダッシュボードへデータを提供。",
              },
              {
                title: "クロンジョブ＆レポートデータパイプライン",
                description: [
                  "深夜のシーケンス: processEndDay (23:59) → processExpired (00:15) → processFuture (00:30)。",
                  "データ生成: createRealRoute (01:00) → createDailyKpiTargets (02:00)。",
                  "レポート作成: backupReportSummary (03:00) → createCompressReport (04:00) → pushFileCompressReport (5分毎)。",
                  "常時実行ジョブ: pingReportStatus (3秒毎)、triggerNotifications (1分毎)。",
                  "データ同期: report-sync-serviceが7つの並行インスタンスを実行し、マスターデータ、店舗、ルート、イベント、在庫を同期。",
                ],
              },
            ],
            techDetails:
              "マルチテナント向けのMongoDBによるデータ分離、キャッシュおよびSocketセッション用Redis、SSO認証用Keycloakの採用。",
            engineeringChallenges: [
              {
                title: "CQRSレポートアーキテクチャ",
                description:
                  "7つの並行データ同期インスタンスを用いたRead/Write分離により、数百万件のレコードを処理。",
              },
              {
                title: "深夜のクロンジョブパイプライン",
                description:
                  "マイクロサービス間で10以上のスケジュールジョブ（バックアップ、ZIP化、同期など）を正しい順序でオーケストレーション。",
              },
              {
                title: "マルチキュー メッセージアーキテクチャ",
                description:
                  "RPC用に30以上のRabbitMQキュー、バックグラウンドジョブ用にBull、外部CRM同期用にKafkaを構成。",
              },
              {
                title: "マルチテナントのデータ分離",
                description:
                  "会社単位のMongoDBスキーマを実装し、安全な企業別レポート生成を実現。",
              },
            ],
            systemArchitecture: [
              {
                title: "概要",
                description:
                  "CQRSアーキテクチャと3つのメッセージブローカー（RabbitMQ, Bull, Kafka）を採用した15のマイクロサービス（NestJS）構成。KubernetesとArgoCDを用いてコンテナ化されています。",
              },
              {
                title: "15のマイクロサービス・モノレポ構成",
                description: [
                  "NestJS上に構築され、厳格なモノレポ構造で管理されています。",
                  "Master Data Service（マスターデータ）: 商品、カテゴリ、代理店などの基本データを管理します。",
                  "Store & Route Service（店舗・ルート）: 店舗のCRUD、GPSチェックイン、およびルート計画を処理します。",
                  "Order Service（注文管理）: 加盟店の注文を処理し、外部の代理店システムと連携します。",
                  "Report & KPI Service（レポート・KPI計算 - CQRS）: 毎日のデータを集計し、ダッシュボード用の高速な読み取りビューを提供します。",
                  "Event & Promo Service（イベント・プロモーション）: ロイヤリティプログラム、報酬、イベント参加を管理します。",
                  "Scheduler Service（スケジューラ）: データバックアップや日次集計など、深夜のクロンジョブを実行します。",
                  "Sync Service（データ同期）: 7つの並行インスタンスで外部のレガシーCRMシステムとデータを同期します。",
                ],
              },
              {
                title: "CQRS データフロー",
                description:
                  "読み取り操作（ダッシュボード）と書き込み操作（チェックイン、注文）は完全に分離されています。バックグラウンドの同期インスタンスが書き込みを処理し、MongoDB内のマテリアライズド・リードビューを更新します。",
              },
              {
                title: "分散メッセージブローカー",
                description:
                  "RabbitMQは高速なRPCリクエスト（30以上のキュー）を処理します。Bull Queueは重いバックグラウンドジョブ（レポート、インポート）をオーケストレーションします。Kafkaは外部のレガシーCRMシステムにデータをストリーミングします。",
              },
              {
                title: "マルチテナント永続化",
                description:
                  "MongoDBは、会社単位で厳格に分離されたスキーマ設計を採用しています。Redisは、分散キャッシュ、レート制限、およびWebSocketセッション状態を管理します。",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/dms-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/dms-images/er_diagram.png`,
            },
          },
        },
        {
          id: "finviet-lending",
          name: "Lending — ローンライフサイクル管理",
          duration: "2025年1月 - 2025年6月",
          description:
            "借り手審査から融資実行・返済までのローンライフサイクル全体を管理するプラットフォームをゼロから構築。",
          techStack: ["NestJS", "RESTful", "PostgreSQL", "マイクロサービス"],
          responsibilities: [
            "要件定義（経営層/SA/PMとの連携）からDBスキーマ設計、本番環境へのデプロイまでの全SDLCを主導",
            "マルチレンダースイッチングロジックのアーキテクチャ設計および、商品・手数料・ドキュメントの動的設定エンジンの構築",
            "Node.js StreamsとPostgreSQLのバッチトランザクションを活用した、メモリ効率の高いホワイトリスト処理パイプラインの開発",
            "外部の貸付業者、eKYC、決済プロバイダーを統合するためのOpen APIゲートウェイの開発",
            "バックエンドの単体テストおよび結合テストを網羅的に作成し、QA引き継ぎ前に高い安定性を実現",
          ],
          githubDocs: {
            readme:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/README.md",
            architecture:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/architecture.md",
            erDiagram:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/er-diagram.md",
            apiFlow:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/api-flow.md",
            features:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/features.md",
            functionalMap:
              "https://github.com/KienVu/portfolio-docs/blob/main/Lending/docs/functional-map.md",
          },
          extendedDetails: {
            features: [
              "Bao Viet Bankなどの新しい銀行を容易に導入できるマルチレンダースイッチングロジック",
              "Node.js StreamsとPostgreSQLバッチインサートを活用したメモリ効率の高いホワイトリスト処理パイプライン",
              "スポンサー銀行へ送信する前に、ユーザーのニーズに基づいて与信枠を評価する自動フィルタリング与信エンジン",
              "Eco Payment GatewayおよびEco eKYCとのシームレスな後払い（Paylater）統合",
              "Strategy Patternを使用した商品および手数料の動的設定マッピング",
            ],
            userRoles: [
              {
                role: "Sales (Eco Staff)",
                details: [
                  "見込み借り手のスカウト",
                  "管理ポータルを通じたホワイトリストExcelファイルのインポート",
                  "自動フィルターで拒否されたローン申請の手動レビュー",
                ],
              },
              {
                role: "Customer (Eco App User)",
                details: [
                  "Eco App経由での後払い（Paylater）申請",
                  "利用可能クレジット残高の確認",
                  "Eco Appチェックアウト時のPaylaterウォレットの使用",
                  "取引履歴と月次明細の表示",
                  "返済処理",
                ],
              },
              {
                role: "Lender (Bao Viet Bank)",
                details: [
                  "Open API経由で自動フィルターから適格ユーザーを受信",
                  "最終的な与信審査の実施",
                  "与信枠の付与と融資実行の処理",
                ],
              },
              {
                role: "System Admin",
                details: [
                  "金融商品、手数料、ドキュメントセット、およびパラメータの設定",
                  "サービスプロバイダー（SMS、eSign、eKYC）の管理",
                  "取引の照合と決済",
                ],
              },
            ],
            apiFlows: [
              {
                title: "ホワイトリストおよびローン申請フロー",
                description:
                  "Sales Excelインポート / User App Form → ニーズに基づく自動フィルター（BE） → 手動チェック（失敗時） → 最終承認のためにBao Viet Bankへ送信 → Ecoがクレジットを付与。",
              },
              {
                title: "動的手数料実行および検証フロー",
                description:
                  "入力手数料でAPIを実行 → 商品制約を取得 → DB手数料を取得 → マッピングおよびバッチインサート。",
              },
              {
                title: "後払い（Paylater）購入フロー",
                description:
                  "Paylater経由でユーザーがチェックアウト → 支払いリクエスト → 限度額確認 → Eco Payment Gateway経由で実行 → Bao Viet Bankと同期。",
              },
              {
                title: "CI/CD デプロイメントフロー",
                description:
                  "GitHub Push → GitHub Actions CI → Dockerイメージのビルド → AWS ECRへプッシュ → ArgoCD → Kubernetesローリングアップデート。",
              },
            ],
            techDetails:
              "RabbitMQ経由で通信するNestJSマイクロサービス。PostgreSQLがコア設定とトランザクションを処理し、Redisが高速キャッシングと重複チェックを提供。Dockerでコンテナ化され、Kubernetes上でオーケストレーション。",
            engineeringChallenges: [
              {
                title: "大容量データのインポート",
                description:
                  "ビジネスチームは数千のホワイトリストレコードをインポートします。メモリリークを防ぐため、ストリームベースの解析、RedisのO(1)重複チェック、およびPostgreSQLのチャンクバッチ操作で処理。",
              },
              {
                title: "マルチレンダルの抽象化と自動フィルタリング",
                description:
                  "Bao Viet Bank統合にStrategy Patternを実装。タイムアウトを防ぐため、RabbitMQを使用して外部API呼び出しから重い自動フィルタリングロジックを分離。",
              },
              {
                title: "複雑なマッピングにおけるデータ整合性",
                description:
                  "商品、手数料、ドキュメント設定を永続化する前に、DBレベルのON DELETE CASCADEおよび厳格なアプリケーションレベルの検証フローを強制。",
              },
            ],
            systemArchitecture: [
              {
                title: "概要",
                description:
                  "完全に分離された個別のデータベーススキーマを持つ5つのコアNestJSマイクロサービス。Kubernetes Ingressおよび非同期RabbitMQイベントストリーミングを介して管理。",
              },
              {
                title: "lending-common",
                description:
                  "共有モジュール、ユーティリティ統合（SMS、eSign、eKYC）、および一般的な顧客/ホワイトリスト管理を処理。",
              },
              {
                title: "loan-product",
                description:
                  "商品、ドキュメント、手数料、およびプロバイダー設定を管理する設定エンジン。",
              },
              {
                title: "lending-loan-transaction",
                description:
                  "コアのローンライフサイクルエンジンであり、自動フィルタリングロジックを処理し、Bao Viet BankのOpen APIと相互作用。",
              },
              {
                title: "lending-transaction",
                description:
                  "照合、決済、および後払い（Paylater）購入のためのEco Payment Gatewayとの統合を処理。",
              },
              {
                title: "dynamic-form",
                description:
                  "オンボーディングフォーム、KYCステップ、およびドキュメント収集ワークフローの動的作成を管理。",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/lending-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/lending-images/er_diagram.png`,
            },
          },
        },
      ],
    },
    {
      name: "株式会社 Lucents Technology",
      role: "フルスタックエンジニア",
      duration: "2022年6月 - 2024年5月",
      color: "#fc1f20",
      logo_path: "lucents_logo.svg",
      projects: [
        {
          id: "merritrade",
          name: "Merritrade — トレーディング・トーナメントプラットフォーム",
          duration: "2022年6月 - 2022年12月",
          description:
            "投資家向けのトレーディングトーナメントプラットフォーム開発。担当：フルスタック（バックエンド70%、フロントエンド20%、DevOps 10%）。",
          techStack: [
            "ReactJS",
            "NestJS",
            "PostgreSQL",
            "GraphQL",
            "RESTful",
            "AWS",
            "Docker",
          ],
          responsibilities: [
            "禁止ユーザー管理機能の実装",
            "トーナメント開始/終了時の自動メール通知の設定",
            "トーナメント終了時のランキング修正",
            "注文履歴・複数ランキングボードファイルのエクスポート",
            "記事・通知管理機能の開発",
            "AWSインフラ&CI/CD管理（EC2, S3, RDS, CodeBuild, ECR, R53）",
          ],
          extendedDetails: {
            features: [
              "ユーザー用のトレーディングWebと管理用の管理ポータルを備えたデュアルWebアーキテクチャ",
              "national-cardマイクロサービスを介してアップロードされた身分証明書（Identity Card）のOCRスキャンをトリガーする自動化されたeKYCオンボーディング",
              "トーナメント終了時にアクティブな注文を正確にクローズする高精度なトーナメントライフサイクル自動化",
              "カスタマイズ可能な基準に基づいてリーダーボードを計算する動的ランキングエンジン",
              "メインスレッドをブロックすることなく大規模なExcelファイルを生成できる非同期データエクスポート",
            ],
            userRoles: [
              {
                role: "トレーダー",
                details: [
                  "自動eKYC検証のために身分証明書（Identity Card）をアップロード",
                  "取引を行い、リアルタイムチャートを表示し、アクティブなトーナメントに参加",
                  "個人の注文履歴を確認し、BTCに異議申し立て（苦情）を提出",
                  "個人の取引履歴をExcel/CSVに直接エクスポート",
                ],
              },
              {
                role: "管理者 (BTC)",
                details: [
                  "トーナメントの開始/終了時間とランキング基準を定義する完全なCRUDコントロール",
                  "疑わしいユーザーを即座に禁止し、アクティブなSocket.ioセッションを強制的に切断",
                  "トーナメントの注文とリーダーボードのグローバルシステムエクスポートをトリガー",
                ],
              },
            ],
            apiFlows: [
              {
                title: "完全なトーナメントライフサイクルフロー",
                description:
                  "管理者がトーナメントを作成 → T-3 / T-1 リマインダーメールが送信される → トーナメントが終了 → cron-tournament-end が正確な為替レートに基づいて未決注文を自動的に強制終了 → ランキングボードを計算。",
              },
              {
                title: "eKYC 身元確認フロー",
                description:
                  "ユーザーが身分証明書（Identity Card）の写真をアップロード → national-card マイクロサービスがOCRスキャンをトリガー → 身元情報を抽出 → DBに保存し、eKYCステータスを更新。",
              },
              {
                title: "大規模データエクスポートフロー",
                description:
                  "管理者がエクスポートを要求 → export マイクロサービスが非同期的に履歴データを集約 → Excelファイルを生成 → AWS S3にストリーミング → 署名付きダウンロードリンクを返す。",
              },
            ],
            techDetails:
              "NX Monorepoを介して管理される大規模なNestJSマイクロサービスバックエンドと連携するデュアルWeb ReactJSアプリケーション。超高速なGraphQLのためのHasura、OCR eKYCおよび非同期データエクスポートのための専用NestJSサービス、およびトーナメントライフサイクルのための複雑なcronスケジューラを備えています。完全にコンテナ化され、AWSにデプロイされています。",
            engineeringChallenges: [
              {
                title: "トーナメント実行における数学的精度",
                description:
                  "トーナメントが終了した瞬間の正確な為替レートを使用して、数千の未決注文を同時に強制終了する際の絶対的な精度とゼロレイテンシを確保しました。",
              },
              {
                title: "データエクスポート中のメモリリーク防止",
                description:
                  "大規模なExcel/CSVデータセット（注文/ランキング）の生成を専用のエクスポートマイクロサービスにオフロードしてメインAPIのクラッシュを防ぎ、出力をAWS S3に直接ストリーミングしました。",
              },
              {
                title: "精密なCronjobの調整",
                description:
                  "プレトーナメントのマーケティング（メール）とミッションクリティカルなポストトーナメントのランキング計算を処理するために、複数のCronjobにわたる複雑なスケジューリングを管理しました。",
              },
            ],
            systemArchitecture: [
              {
                title: "概要",
                description:
                  "15以上のマイクロサービスをオーケストレーションするNX Monorepo。データ配信のためにPostgreSQLをラップするHasura（GraphQL）、リアルタイム機能を駆動するSocket.io。",
              },
              {
                title: "フロントエンド",
                description:
                  "分離されたReactJSトレーディングWebと管理ポータル。",
              },
              {
                title: "バックエンドコア",
                description:
                  "eKYC、エクスポート、取引ロジック、およびトーナメントスケジューラを処理するNestJSマイクロサービス。Pub/SubおよびSocket.io状態管理のためのRedis。",
              },
            ],
            images: {
              functionalMap: `${process.env.PUBLIC_URL}/merritrade-images/functional_map.png`,
              erDiagram: `${process.env.PUBLIC_URL}/merritrade-images/er_diagram.png`,
            },
          },
        },
        {
          id: "infofinance",
          name: "Infofinance — 金融ニュース・苦情管理",
          duration: "2022年12月 - 2024年5月",
          description:
            "投資家の苦情処理・最新金融ニュース表示を行うサードパーティプラットフォームをゼロから構築。担当：フルスタック（バックエンド70%）。",
          techStack: [
            "ReactJS",
            "Strapi",
            "NestJS",
            "MongoDB",
            "RESTful",
            "AWS",
            "Cognito",
            "Amplify",
            "Docker",
          ],
          responsibilities: [
            "プロジェクト全体をゼロから構築",
            "ユーザー機能：苦情投稿・イベント参加・ニュース閲覧",
            "ダッシュボード：苦情/イベント/チーム/ニュースの管理機能",
            "AWSインフラ&CI/CD（EC2, S3, Cognito, Amplify, CodePipeline）",
          ],
          extendedDetails: {
            systemArchitecture:
              "Strapi CMS + Hasura GraphQL + NestJS Microservices + Airtable + AWS Lambda (MediaConvert)",
            techDetails:
              "疎結合なバックエンドアーキテクチャで設計されたデュアルポータル（ユーザー用とブローカー用）Webアプリケーションです。Strapi CMSはニュースとイベントコンテンツを管理し、HasuraはPostgreSQL上で超高速なGraphQLレイヤーを提供します。NestJSマイクロサービスは、イベント登録やユーザー連絡先をAirtableに直接同期するといった複雑なビジネスロジックを処理し、事実上のリアルタイムCRMとして機能します。AWS Cognito（カスタムトリガー）とAWS Lambda（AWS MediaConvert）を活用したAWSサーバーレススタックにより、ユーザーがアップロードしたビデオ（苦情の証拠）を最適化されたHLS（M3U8）ストリームへ自動変換します。",
            features: [
              "ブローカーのレビューおよび星評価システム",
              "マルチメディア苦情のための自動チケットキャプチャ",
              "サーバーレスなビデオトランスコーディング（AWS Lambda経由のMediaConvert）",
              "Airtableを活用したイベント登録と動的CRM同期",
              "AWS CognitoとLambdaトリガーによるカスタムアイデンティティ管理",
            ],
            metrics: [
              "Airtableを利用したゼロメンテナンスのCRM統合",
              "Apple HLS (M3U8) エンコーディングを使用した高スケーラブルなビデオストリーミング",
            ],
            githubMarkdownUrl:
              "file:///Users/KienVu/Desktop/Lucents/hasura-infofx/docs/README.md",
            images: [
              {
                url: "/infofx-images/er_diagram.png",
                caption: "InfoFX ER図",
                isMarkdownDiagram: true,
              },
              {
                url: "/infofx-images/functional_map.png",
                caption: "InfoFX 機能マインドマップ",
                isMarkdownDiagram: true,
              },
            ],
          },
        },
        {
          id: "sales-network",
          name: "Sales Network — スマートHRM・給与管理",
          duration: "2023年1月 - 2024年5月",
          description:
            "給与ソリューションを実装したスマートHRMシステムの開発。担当：バックエンドメイン。",
          techStack: [
            "ReactJS",
            "NX",
            "NestJS",
            "ExpressJS",
            "Socket.io",
            "GraphQL",
            "PostgreSQL",
            "AWS",
            "Docker",
          ],
          responsibilities: [
            "送金フローのリファクタリングにより送金エラーを約80%削減",
            "デザイン仕様に基づくUI実装とバックエンドAPIとの連携",
            "部署・チーム変更、苦情対応、給与エクスポートの処理",
            "ボーナス・ペナルティシステムのリファクタリング",
            "社内通知管理機能の開発",
            "AWSインフラ&CI/CD管理",
          ],
          extendedDetails: {
            images: {
              erDiagram: "/salesnetwork-images/er_diagram.png",
              functionalMap: "/salesnetwork-images/functional_map.png",
            },
            githubDocs: {
              architecture:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/architecture.md",
              apiFlow:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/api-flow.md",
              erDiagram:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/er-diagram.md",
              features:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/features.md",
              functionalMap:
                "https://github.com/KienVu/portfolio-docs/blob/main/Lucents/SalesNetwork/docs/functional-map.md",
            },
            features: [
              "承認ワークフローエンジン: 部署やチームの変更に関する厳格なリクエスト承認ロジック（PENDING -> DONE/REJECTED）を実装し、node-xlsxおよびpdfmakeを使用して大量の給与データのエクスポート機能を実装しました。",
              "財務フローのリファクタリング（9Pay）: 送金フローを同期API呼び出しから、新しいコアコードベースでの非同期Bull Queueアーキテクチャへと移行し、送金エラーを約80%削減して給与処理を円滑化しました。",
              "ボーナス・ペナルティシステム: 従業員のKPI報酬と懲戒控除を計算するコアロジックをリファクタリングしました。自動化されたCronワーカー（cron_update_bonus.js、calculate_penalize_bonus.js）とbonus-blacklistモジュールを備えています。",
              "社内通知: NestJS WebSockets（@nestjs/platform-socket.io）および内部メーラー（@nestjs-modules/mailer）によるリアルタイム通信を管理しました。",
            ],
            userRoles: ["セールス従業員", "承認者 / 管理者"],
            apiFlows: [
              "マネージャー承認フロー（Socket/Mailer通知によるイベント駆動のプロファイル更新）",
              "非同期9Pay送金フロー（Bull / Redis Queue経由）",
              "Cronワーカーによる自動ボーナス/ペナルティ処理",
            ],
            engineeringChallenges: [
              "課題1: 同期的な9Pay送金フローをBull Queueシステムに移行し、APIのタイムアウトを防ぎ、大量の給与を円滑に配信できるようにし、エラーを80%削減すること。",
              "課題2: 複雑な階層的承認（従業員 -> 承認者 -> 管理者）を処理し、プロファイルを動的に更新する内部イベントを発生させる柔軟なスキーマとイベント駆動型アーキテクチャの設計。",
              "課題3: 大量のKPIボーナスと懲戒控除のデータセットを効率的に計算するための、高度に並行処理されるバックグラウンドCronシステムの構築。",
            ],
            systemArchitecture:
              "ReactJS + Keycloak (IAM) + Hasura GraphQL + NestJS Microservices (NX Monorepo) + Bull Queue / Redis",
            techDetails:
              "アクセス管理にKeycloakを、高速なGraphQLデータアクセスにHasuraを利用する包括的なHRMシステム。非同期給与送金を円滑にし異常を80%削減するBull Queueを統合した、大幅にリファクタリングされた財務マイクロサービスを特徴としています。",
          },
        },
      ],
    },
    {
      name: "株式会社 玉吉製作所",
      role: "ソフトウェアエンジニア",
      duration: "2025年6月 - 2025年8月",
      color: "#555555",
      logo_path: "tamayoshi_logo.png",
      projects: [
        {
          id: "t-next",
          name: "T-Next — ローン管理ダッシュボード",
          duration: "2025年6月 - 2025年8月",
          description:
            "借り手審査から返済までのローンライフサイクルを管理するプラットフォーム。チーム規模：4名。",
          techStack: [
            "C#",
            "TypeScript",
            ".NET",
            "Angular",
            "RESTful API",
            "MSSQL",
          ],
          responsibilities: [
            "見積プロジェクトおよび購買品目管理のためのダッシュボード開発",
            "配送種別および計測方法に関するCRUD機能の実装",
            "要件定義・基本設計・詳細設計への参加",
          ],
        },
      ],
    },
  ],
};

export const projectsHeader = {
  title: "プロジェクト",
  description:
    "最新の技術ツールを活用して、多様なプロジェクトに取り組んできました。",
  avatar_image_path: "projects_image.svg",
};

export const publicationsHeader = {
  title: "出版物",
  description: "",
  avatar_image_path: "projects_image.svg",
};

export const publications = {
  data: [],
};

export const contactPageData = {
  contactSection: {
    title: "お問い合わせ",
    profile_image_path: "animated_ashutosh.png",
    description: "ソーシャルメディアやメールでお気軽にご連絡ください。",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "住所",
    subtitle: "661-0974 兵庫県尼崎市若王寺3丁目14番13",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "電話番号",
    subtitle: "07084736863",
  },
};
