import { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const snackSlides = [
  {
    image: "/images/projects/snack/slides/slide1.png",
    title: "프로젝트 소개",
    description:
      "실시간 과자인식 시스템의 목표와 전체 프로젝트 구성을 소개합니다.",
  },
  {
    image: "/images/projects/snack/slides/slide2.png",
    title: "10종 과자 인식 결과",
    description:
      "학습된 Object Detection 모델이 10종의 과자를 인식하는 결과를 확인할 수 있습니다.",
  },
  {
    image: "/images/projects/snack/slides/slide3.png",
    title: "모델 성능 평가",
    description:
      "다양한 환경에서 모델의 인식 성능과 정확도를 비교하며 결과를 분석했습니다.",
  },
  {
    image: "/images/projects/snack/slides/slide4.png",
    title: "데이터셋 구축",
    description:
      "Roboflow 데이터셋을 활용해 이미지를 관리하고 모델 학습에 필요한 데이터를 구성했습니다.",
  },
  {
    image: "/images/projects/snack/slides/slide5.png",
    title: "데이터 증강",
    description:
      "데이터 증강 기법을 적용하여 다양한 환경에서도 안정적으로 인식할 수 있도록 모델의 일반화 성능을 향상시켰습니다.",
  },
  {
    image: "/images/projects/snack/slides/slide6.png",
    title: "실시간 처리 파이프라인",
    description:
      "OpenCV와 YOLOv8을 활용하여 영상 입력부터 객체 탐지, 결과 출력까지의 처리 과정을 구현했습니다.",
  },
  {
    image: "/images/projects/snack/slides/slide7.png",
    title: "실시간 인식 결과",
    description:
      "웹캠 환경에서 여러 종류의 과자를 실시간으로 탐지하고 분류하는 결과를 확인했습니다.",
  },
  {
    image: "/images/projects/snack/slides/slide8.png",
    title: "한계점 분석",
    description:
      "실제 테스트 과정에서 발생한 오인식 사례를 분석하고 모델의 개선 방향을 확인했습니다.",
  },
]

const ragSlides = [
  {
    image: "/images/projects/rag/slides/slide1.png",
    title: "로그인 페이지",
    description:
      "이메일 로그인과 데모 계정 접속을 제공하는 서비스 시작 화면을 설계했습니다.",
  },
  {
    image: "/images/projects/rag/slides/slide2.png",
    title: "논문 라이브러리",
    description:
      "업로드한 논문을 검색하고 관리하며 비교할 수 있는 라이브러리 화면입니다.",
  },
  {
    image: "/images/projects/rag/slides/slide3.png",
    title: "논문 리더 페이지",
    description:
      "논문을 읽으면서 AI에게 질문하고 근거를 확인할 수 있는 핵심 화면을 설계했습니다.",
  },
  {
    image: "/images/projects/rag/slides/slide4.png",
    title: "논문 비교 기능",
    description:
      "두 개의 논문을 분할 화면으로 열어 내용을 동시에 확인하고 비교할 수 있도록 설계했습니다.",
  },
  {
    image: "/images/projects/rag/slides/slide5.png",
    title: "근거 확인 흐름",
    description:
      "AI 답변의 근거를 확인하고 논문 원문으로 연결되는 사용자 흐름을 설계했습니다.",
  },
]

  const [isSnackSlidesOpen, setIsSnackSlidesOpen] = useState(false)
  const presentationRef = useRef(null)
  const [currentSnackSlide, setCurrentSnackSlide] = useState(0)

  const [isRagSlidesOpen, setIsRagSlidesOpen] = useState(false)
  const [currentRagSlide, setCurrentRagSlide] = useState(0)
  const ragPresentationRef = useRef(null)

  const [isServicePlanOpen, setIsServicePlanOpen] = useState(false)
  const servicePlanRef = useRef(null)

    const showPreviousSnackSlide = () => {
    setCurrentSnackSlide((currentSlide) =>
      currentSlide === 0 ? snackSlides.length - 1 : currentSlide - 1
    )
  }

  const showNextSnackSlide = () => {
    setCurrentSnackSlide((currentSlide) =>
      currentSlide === snackSlides.length - 1 ? 0 : currentSlide + 1
    )
  }

  const closeSnackSlides = () => {
    setIsSnackSlidesOpen(false)
    setCurrentSnackSlide(0)
  }

  const showPreviousRagSlide = () => {
  setCurrentRagSlide((currentSlide) =>
    currentSlide === 0 ? ragSlides.length - 1 : currentSlide - 1
  )
}

const showNextRagSlide = () => {
  setCurrentRagSlide((currentSlide) =>
    currentSlide === ragSlides.length - 1 ? 0 : currentSlide + 1
  )
}

const closeRagSlides = () => {
  setIsRagSlidesOpen(false)
  setCurrentRagSlide(0)
}

const closeServicePlan = () => {
  setIsServicePlanOpen(false)
}

  useEffect(() => {
    if (isSnackSlidesOpen && presentationRef.current) {
      presentationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    }
  }, [isSnackSlidesOpen])

  useEffect(() => {
  if (isRagSlidesOpen && ragPresentationRef.current) {
    ragPresentationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }
}, [isRagSlidesOpen])

useEffect(() => {
  if (isServicePlanOpen && servicePlanRef.current) {
    servicePlanRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }
}, [isServicePlanOpen])

  return (
    <>
      <header className="header">
        <nav className="navigation" aria-label="주요 메뉴">
          <a className="logo" href="#home">
            YOO CHAEHYEON
          </a>

          <div className="navigation-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#study">Study</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <img
            className="hero-background"
            src="/images/projects/hero/hero-bg3.jpg"
            alt=""
            aria-hidden="true"
          />

          <div className="hero-content">
            <div className="hero-text-panel">

              <h1 className="hero-title">YOO CHAEHYEON</h1>

              <h2 className="hero-subtitle">
                AI를 배우고 기록하며 직접 구현하는 개발자입니다.
              </h2>

              <p className="hero-description">
                AI학과에 재학하며 컴퓨터비전, 딥러닝, LLM과 백엔드 기술을 공부하고 있습니다.
                <br />
                학습한 내용을 기록하고, 프로젝트를 통해 직접 구현하며 성장하고 있습니다.
              </p>

              <div className="hero-buttons">
                <a
                  className="hero-button hero-button-primary"
                  href="#projects"
                >
                  프로젝트 보기
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="about">
          <div className="section-container">
            <p className="section-label">ABOUT ME</p>

            <h2 className="section-title">
              AI 기술을 실제 서비스에 적용하는 것을 배우고 있습니다.
            </h2>

            <div className="about-description">
              <p>
                AI학과에 재학하며 컴퓨터비전, 딥러닝, 자연어처리와 웹 개발을
                공부하고 있습니다.
              </p>

              <p>
                AI 모델을 학습하는 데서 끝나지 않고, 실제 웹 서비스와 연결해 사용 가능한 기능으로 구현하고 있으며
                <br />
                학습한 내용은 Velog와 Notion에 기록하면서 팀원들과 공유하고 있습니다.
              </p>
            </div>

            <div className="about-profile-grid">
              <article className="profile-card interest-card">
                <p className="profile-card-label">INTEREST</p>

                <div className="interest-header">
                  <h3>관심 분야</h3>

                  <div className="interest-tags">
                    <span>AI Backend</span>
                    <span>LLM Application</span>
                    <span>RAG</span>
                  </div>
                </div>

                <p className="profile-card-description">
                  AI 기술을 실제 웹 서비스와 연결하고, 사용자가 활용할 수 있는
                  기능으로 구현하는 데 관심이 있습니다.
                </p>
              </article>

              <article className="profile-card hobby-card">
                <p className="profile-card-label">HOBBY</p>
                <h3>취미</h3>

                <div className="hobby-bubbles">
                  <div className="hobby-bubble hobby-bubble-movie">
                    <img
                      src="/images/projects/about/movie.jpg"
                      alt="영화 보기"
                      className="hobby-bubble-image"
                    />

                    <strong>MOVIE</strong>
                    <span>영화 보기</span>
                  </div>

                  <div className="hobby-bubble hobby-bubble-music">
                    <img
                      src="/images/projects/about/music.png"
                      alt="음악 듣기"
                      className="hobby-bubble-image"
                    />

                    <strong>MUSIC</strong>
                    <span>음악 듣기</span>
                  </div>

                  <div className="hobby-bubble hobby-bubble-cafe">
                    <img
                      src="/images/projects/about/cafe.jpg"
                      alt="카페 가기"
                      className="hobby-bubble-image"
                    />

                    <strong>CAFE</strong>
                    <span>카페 가기</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="skills-area">
              <p className="skills-title">TECH STACK</p>

              <div className="skills">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Computer Vision</span>
                <span className="skill-tag">Deep Learning</span>
                <span className="skill-tag">LLM</span>
                <span className="skill-tag">RAG</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section section-alt" id="projects">
  <div className="section-container">
    <div className="projects-heading">
      <p className="section-label">PROJECTS</p>

      <h2 className="section-title">
        AI 기술을 실제 서비스로 구현한 프로젝트
      </h2>

      <p className="projects-intro">
        컴퓨터비전과 LLM·RAG을 활용해 AI 기능을 사용자 경험과 연결하였습니다.
      </p>
    </div>

    <div className="projects-list">
      <article className="project-card">
        <div className="project-image-wrap project-image-wrap-snack">
          <img
            className="project-image project-image-snack"
            src="/images/projects/snack-detection.png"
            alt="실시간 과자인식 시스템 결과 화면"
          />
        </div>

        <div className="project-content">
          <div className="project-meta">
            <span className="project-category">
              COMPUTER VISION
            </span>
          </div>

          <h3 className="project-title">
            실시간 과자인식 시스템
          </h3>

          <p className="project-description">
            이미지 또는 카메라 화면에서 과자를 탐지하고 종류를 구분하는
            컴퓨터비전 프로젝트입니다.
          </p>

          <div className="project-detail">
            <p className="project-detail-title">주요 구현</p>

            <ul className="project-detail-list">
              <li>과자 이미지 데이터 수집 및 전처리</li>
              <li>Object Detection 모델 학습</li>
              <li>핸드폰 촬영 이미지 추론</li>
              <li>학습 결과와 오탐 사례 분석</li>
            </ul>
          </div>

          <div className="project-tags">
            <span>Python</span>
            <span>Object Detection</span>
            <span>Computer Vision</span>
            <span>Deep Learning</span>
          </div>

          <div className="project-links">
            <button
              type="button"
              className="project-link"
              onClick={() => {
                setIsSnackSlidesOpen((isOpen) => !isOpen)
                setCurrentSnackSlide(0)
              }}
            >
              {isSnackSlidesOpen ? "Close" : "Details"}
            </button>

            <a
              href="https://github.com/YooChaehyeon/Snack-Detect"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </article>

            {isSnackSlidesOpen && (
        <section
          ref={presentationRef}
          className="presentation-panel"
          aria-label="실시간 과자인식 시스템 발표 자료"
        >

          <div className="presentation-header">
            <div>
              <p className="presentation-label">PRESENTATION</p>

              <h3 className="presentation-title">
                실시간 과자인식 시스템
              </h3>
            </div>

            <button
              type="button"
              className="presentation-close"
              onClick={closeSnackSlides}
              aria-label="Details"
            >
              ×
            </button>
          </div>

          <div className="presentation-content">
            <div className="presentation-image-wrap">
              <img
                className="presentation-image"
                src={snackSlides[currentSnackSlide].image}
                alt={`${snackSlides[currentSnackSlide].title} 발표 슬라이드`}
              />
            </div>

            <div className="presentation-description">
              <h4>{snackSlides[currentSnackSlide].title}</h4>

              <p>{snackSlides[currentSnackSlide].description}</p>
            </div>
          </div>

          <div className="presentation-navigation">
  <button
    type="button"
    className="presentation-nav-button"
    onClick={showPreviousSnackSlide}
  >
    <span aria-hidden="true">←</span>
    이전
  </button>

  <div className="presentation-position">
    <p className="presentation-count">
      {currentSnackSlide + 1} / {snackSlides.length}
    </p>

    <div
      className="presentation-dots"
      aria-label="슬라이드 선택"
    >
      {snackSlides.map((slide, index) => (
        <button
          type="button"
          key={slide.image}
          className={
            index === currentSnackSlide
              ? "presentation-dot presentation-dot-active"
              : "presentation-dot"
          }
          onClick={() => setCurrentSnackSlide(index)}
          aria-label={`${index + 1}번째 슬라이드 보기`}
        />
      ))}
    </div>
  </div>

  <button
    type="button"
    className="presentation-nav-button"
    onClick={showNextSnackSlide}
  >
    다음
    <span aria-hidden="true">→</span>
  </button>
</div>
        </section>
      )}

      <article className="project-card project-card-reverse">
        <div className="project-image-wrap">
          <img
            className="project-image project-image-rag"
            src="/images/projects/paper-rag.png"
            alt="논문 RAG 프로젝트 Figma 화면"
          />
        </div>

        <div className="project-content">
          <div className="project-meta">
            <span className="project-category">
              LLM · RAG
            </span>

            <span className="project-status project-status-progress">
              IN PROGRESS
            </span>
          </div>

          <h3 className="project-title">
            논문 RAG 리더
          </h3>

          <p className="project-description">
            PDF 논문을 검색하고 관련 근거를 활용해 사용자의 질문에
            답변하는 AI 서비스입니다.
          </p>

          <div className="project-detail">
            <p className="project-detail-title">구현 및 설계</p>

            <ul className="project-detail-list">
              <li>PDF 문서 로드와 텍스트 분할</li>
              <li>임베딩 기반 벡터 검색</li>
              <li>검색 문맥 기반 LLM 답변</li>
              <li>논문 리더 화면과 사용자 흐름 설계</li>
            </ul>
          </div>

          <div className="project-tags">
            <span>React</span>
            <span>RAG</span>
            <span>LLM</span>
            <span>LangChain</span>
          </div>

          <div className="project-links">
            <button
              type="button"
              className="project-link"
              onClick={() => {
                if (isRagSlidesOpen) {
                  closeRagSlides()
                } else {
                  setIsServicePlanOpen(false)
                  setIsRagSlidesOpen(true)
                  setCurrentRagSlide(0)
                }
              }}
            >
              {isRagSlidesOpen ? "Close" : "Figma"}
            </button>

            <button
              type="button"
              className="project-link"
              onClick={() => {
                if (isServicePlanOpen) {
                  closeServicePlan()
                } else {
                  setIsRagSlidesOpen(false)
                  setCurrentRagSlide(0)
                  setIsServicePlanOpen(true)
                }
              }}
            >
              {isServicePlanOpen ? "Close" : "Service Plan"}
            </button>
          </div>
        </div>
      </article>      
            {isRagSlidesOpen && (
        <section
          ref={ragPresentationRef}
          className="presentation-panel"
          aria-label="논문 RAG 프로젝트 Figma 화면"
        >
          <div className="presentation-header">
            <div>
              <p className="presentation-label">FIGMA DESIGN</p>

              <h3 className="presentation-title">
                논문 RAG 리더
              </h3>
            </div>

            <button
              type="button"
              className="presentation-close"
              onClick={closeRagSlides}
              aria-label="Figma 화면 닫기"
            >
              ×
            </button>
          </div>

          <div className="presentation-content">
            <div className="presentation-image-wrap">
              <img
                className="presentation-image"
                src={ragSlides[currentRagSlide].image}
                alt={`${ragSlides[currentRagSlide].title} Figma 화면`}
              />
            </div>

            <div className="presentation-description">
              <h4>{ragSlides[currentRagSlide].title}</h4>

              <p>{ragSlides[currentRagSlide].description}</p>

            </div>
          </div>

          <div className="presentation-navigation">
            <button
              type="button"
              className="presentation-nav-button"
              onClick={showPreviousRagSlide}
            >
              <span aria-hidden="true">←</span>
              이전
            </button>

            <div className="presentation-position">
              <p className="presentation-count">
                {currentRagSlide + 1} / {ragSlides.length}
              </p>

              <div
                className="presentation-dots"
                aria-label="Figma 화면 선택"
              >
                {ragSlides.map((slide, index) => (
                  <button
                    type="button"
                    key={slide.image}
                    className={
                      index === currentRagSlide
                        ? "presentation-dot presentation-dot-active"
                        : "presentation-dot"
                    }
                    onClick={() => setCurrentRagSlide(index)}
                    aria-label={`${index + 1}번째 Figma 화면 보기`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              className="presentation-nav-button"
              onClick={showNextRagSlide}
            >
              다음
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>
      )}
      {isServicePlanOpen && (
        <section
          ref={servicePlanRef}
          className="service-plan-panel"
          aria-label="논문 RAG 리더 개발 계획"
        >
          <div className="service-plan-header">
            <div>
              <p className="service-plan-label">SERVICE PLAN</p>

              <h3 className="service-plan-title">
                논문 RAG 리더 개발 계획
              </h3>

              <p className="service-plan-intro">
                논문 탐색부터 근거 기반 AI 질의응답까지 하나의 흐름으로
                연결하는 서비스를 구현할 예정입니다.
              </p>
            </div>

            <button
              type="button"
              className="presentation-close"
              onClick={closeServicePlan}
              aria-label="Service Plan 닫기"
            >
              ×
            </button>
          </div>

          <div className="service-plan-grid">
            <article className="service-plan-card">
              <span className="service-plan-number">01</span>
              <p className="service-plan-category">USER FLOW</p>

              <h4>사용자 흐름</h4>

              <p>
                로그인부터 논문 업로드, 라이브러리 관리, 리더 페이지 진입까지
                자연스럽게 이어지는 서비스 흐름을 구현합니다.
              </p>

              <div className="service-plan-flow">
                <span>로그인</span>
                <span aria-hidden="true">→</span>
                <span>논문 업로드</span>
                <span aria-hidden="true">→</span>
                <span>라이브러리</span>
                <span aria-hidden="true">→</span>
                <span>리더</span>
              </div>
            </article>

            <article className="service-plan-card">
              <span className="service-plan-number">02</span>
              <p className="service-plan-category">CORE FEATURES</p>

              <h4>핵심 기능</h4>

              <p>
                논문을 읽고 질문하는 과정에서 필요한 기능을 하나의 리더
                화면에 연결합니다.
              </p>

              <div className="service-plan-tags">
                <span>PDF 업로드</span>
                <span>AI 질의응답</span>
                <span>답변 근거 확인</span>
                <span>PDF 위치 이동</span>
                <span>논문 비교 보기</span>
              </div>
            </article>

            <article className="service-plan-card">
              <span className="service-plan-number">03</span>
              <p className="service-plan-category">TECH STRUCTURE</p>

              <h4>구현 구조</h4>

              <p>
                프론트엔드와 백엔드, RAG 파이프라인을 연결하여 근거 기반
                답변을 생성하는 구조로 개발합니다.
              </p>

              <div className="service-plan-stack">
                <span>React</span>
                <span aria-hidden="true">→</span>
                <span>FastAPI</span>
                <span aria-hidden="true">→</span>
                <span>RAG</span>
                <span aria-hidden="true">→</span>
                <span>Vector DB</span>
                <span aria-hidden="true">→</span>
                <span>LLM</span>
              </div>
            </article>
          </div>

          <div className="service-plan-footer">
            <span className="service-plan-status">
              Figma 설계 완료
            </span>

            <p>프론트엔드 및 백엔드 개발 진행 예정</p>
          </div>
        </section>
      )}

    </div>
  </div>
</section>

        <section className="content-section" id="study">
          <div className="section-container">
            <div className="study-heading">
              <p className="section-label">STUDY LOG</p>

              <h2 className="section-title">
                배운 내용을 기록하며 이를 팀원들과 공유하고 있습니다
              </h2>

              <p className="study-intro">
                Velog와 Notion에 학습 과정과 구현 내용을 기록하며
                복습하고 있습니다
              </p>
            </div>

            <div className="study-grid">

              <article className="study-card">
                <div className="study-card-header">
                  <h3>OPERATING SYSTEM</h3>
                  <span className="study-platform velog">
                    Velog
                  </span>
                </div>

                <h4>운영체제 학습 기록</h4>

                <p>
                  프로세스, 스레드, CPU 스케줄링 등 운영체제 핵심 개념을
                  학습하며 시스템의 동작 원리 정리
                </p>

                <a
                  href="https://velog.io/@chyou/series/%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C"
                  target="_blank"
                  rel="noreferrer"
                  className="study-link"
                >
                  View Article ↗
                </a>
              </article>

              <article className="study-card">
                <div className="study-card-header">
                  <h3>REACT</h3>
                  <span className="study-platform notion">
                    Notion
                  </span>
                </div>

                <h4>React 학습 기록</h4>

                <p>
                  State, Context, Reducer를 중심으로
                  컴포넌트 구조와 상태 관리 방식 정리
                </p>

                <a
                  href="https://app.notion.com/p/React-3a2c97a142ec803b8028da607e863e34"
                  target="_blank"
                  rel="noreferrer"
                  className="study-link"
                >
                  View Article ↗
                </a>
              </article>

              <article className="study-card">
                <div className="study-card-header">
                  <h3>AI CHATBOT</h3>
                  <span className="study-platform notion">
                    Notion
                  </span>
                </div>

                <h4>금융 AI 챗봇 구현</h4>

                <p>
                  PDF 기반 금융 AI 챗봇 구현과
                  RAG 서비스 배포 과정을 학습
                </p>

                <a
                  href="https://app.notion.com/p/Finance-Agent-3a8c97a142ec80a5843ef3b4058da122"
                  target="_blank"
                  rel="noreferrer"
                  className="study-link"
                >
                  View Article ↗
                </a>
              </article>

            </div>
          </div>
        </section>

        <section className="content-section" id="contact">
          <div className="section-container">
            <p className="section-label">CONTACT</p>
            <h2 className="section-title">
              유채현
            </h2>

            <p className="contact-email">
              chyou0102@gmail.com
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App