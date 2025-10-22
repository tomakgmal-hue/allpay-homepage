
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Building2, CreditCard, Globe2, Wallet2, Bell, Globe, ShieldCheck, Layers, LockKeyhole, FileCode2, Headphones, Network, ShoppingBag, Repeat, CloudCog, Sparkles } from "lucide-react";

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }){
  return (
    <section id={id} className="section">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }){
  return <div className="card">{children}</div>;
}

export default function Page(){
  return (
    <>
      <Navbar />
      <Hero />
      
      <Section id="about" title="회사 소개">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-allpay.blue" />
              <h3 className="text-xl font-semibold">미션</h3>
            </div>
            <p className="mt-3 text-slate-700">
              AllPay는 전 세계 기업의 결제를 하나로 연결하는 글로벌 핀테크 인프라입니다.
              우리는 복잡한 결제 인프라를 단일 API로 단순화하여, 고객이 본질적인 비즈니스에 집중할 수 있도록 돕습니다.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-allpay.sky" />
              <h3 className="text-xl font-semibold">가치</h3>
            </div>
            <p className="mt-3 text-slate-700">
              안정성, 확장성, 보안성을 핵심 가치로 삼고 있으며, 규제 준수와 투명한 정산을 약속합니다.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="services" title="서비스 개요">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-allpay.blue" />
              <h3 className="text-lg font-semibold">가상계좌 발급</h3>
            </div>
            <p className="mt-3 text-slate-700">
              고객/거래처별 전용 계좌를 즉시 발급하고 입금 자동 매칭으로 회계 업무를 자동화합니다.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Globe2 className="w-6 h-6 text-allpay.blue" />
              <h3 className="text-lg font-semibold">글로벌 결제</h3>
            </div>
            <p className="mt-3 text-slate-700">
              단일 API로 해외 카드/계좌이체/전자지갑을 지원하고, 주요 통화로 실시간 정산율을 제공합니다.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Wallet2 className="w-6 h-6 text-allpay.blue" />
              <h3 className="text-lg font-semibold">정산 & 정기결제</h3>
            </div>
            <p className="mt-3 text-slate-700">
              주기별 청구·자동이체·실패 재시도 정책과 대시보드 리포트를 기본 제공하여 운영 부담을 줄입니다.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="features" title="주요 기능">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-allpay.sky" />
              <h3 className="text-lg font-semibold">실시간 알림</h3>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              <li>입금/정산/환불/리스크 이벤트 웹훅</li>
              <li>대시보드 로그 및 SLA 모니터링</li>
              <li>Ops 채널로 즉시 알림 연동</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-allpay.sky" />
              <h3 className="text-lg font-semibold">다중 통화 지원</h3>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              <li>원화/달러/유로 등 주요 통화</li>
              <li>환율 스냅샷과 정산 환산율 고정</li>
              <li>국가/채널별 수수료 정책</li>
            </ul>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-allpay.sky" />
              <h3 className="text-lg font-semibold">리스크 관리</h3>
            </div>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              <li>이상 거래 탐지 및 제한 룰</li>
              <li>권한/역할 기반 접근 제어</li>
              <li>감사 로그 및 규제 준수 리포트</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section id="advantages" title="차별성 & 장점">
        <Card>
          <div className="grid md:grid-cols-2 gap-6 text-slate-700">
            <div className="flex items-start gap-3">
              <Layers className="w-6 h-6 text-allpay.blue mt-1"/> 
              <div>
                <h4 className="font-semibold">확장 가능한 아키텍처</h4>
                <p>마이크로서비스와 이벤트 스트림 기반으로 서비스마다 독립적 확장/배포가 가능합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LockKeyhole className="w-6 h-6 text-allpay.blue mt-1"/>
              <div>
                <h4 className="font-semibold">강력한 보안</h4>
                <p>데이터 암호화, 키 관리, 네트워크 분리와 보안 감사로 엔터프라이즈 보안을 보장합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileCode2 className="w-6 h-6 text-allpay.blue mt-1"/>
              <div>
                <h4 className="font-semibold">개발자 친화성</h4>
                <p>간결한 API, 샘플 코드, 샌드박스 환경 및 풍부한 문서로 통합 시간을 단축합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Headphones className="w-6 h-6 text-allpay.blue mt-1"/>
              <div>
                <h4 className="font-semibold">전담 지원</h4>
                <p>도입 컨설팅부터 운영까지 전담 기술팀이 함께합니다.</p>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <Section id="architecture" title="기술 구조">
        <Card>
          <div className="flex items-center gap-3 mb-3">
            <Network className="w-6 h-6 text-allpay.sky" />
            <h3 className="text-lg font-semibold">Event-driven Microservices Architecture</h3>
          </div>
          <p className="text-slate-700">
            API 게이트웨이, 결제 라우팅, 정산 엔진, 알림 서비스로 구성됩니다. 각 서비스는 이벤트 기반 메시징으로 통신하며,
            멀티 리전/멀티 AZ 배치를 통해 고가용성과 장애 격리를 보장합니다.
          </p>
        </Card>
      </Section>

      <Section id="scenarios" title="서비스 활용 시나리오">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-allpay.sky" />
              <h3 className="text-lg font-semibold">마켓플레이스 정산</h3>
            </div>
            <p className="mt-3 text-slate-700">
              셀러별 가상계좌로 입금 자동 매칭, 수수료 차감 정산, 주기별 대금 지급을 자동화합니다.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <Repeat className="w-6 h-6 text-allpay.sky" />
              <h3 className="text-lg font-semibold">구독/정기결제</h3>
            </div>
            <p className="mt-3 text-slate-700">
              플랜·쿠폰·청구 주기 관리와 실패 재시도 정책으로 안정적인 MRR을 구축합니다.
            </p>
          </Card>
          <Card>
            <div className="flex items-center gap-3">
              <CloudCog className="w-6 h-6 text-allpay.sky" />
              <h3 className="text-lg font-semibold">글로벌 SaaS 확장</h3>
            </div>
            <p className="mt-3 text-slate-700">
              다국어·다통화·현지 결제 채널을 단일 통합으로 제공해 해외 고객 전환율을 높입니다.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="operations" title="운영 체계">
        <Card>
          <p className="text-slate-700">
            모니터링/알림, 장애 대응 플레이북, 로그 분석, 보안 감사 절차를 운영 표준으로 갖추고 있습니다.
            SLA 기반 지원 체계로 예측 가능한 운영을 보장합니다.
          </p>
        </Card>
      </Section>

      <Section id="roadmap" title="향후 로드맵">
        <Card>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>해외 결제 파트너 및 현지화 채널 확대</li>
            <li>위험 탐지 모델 고도화 및 실시간 점수화</li>
            <li>정산 대시보드 신규 위젯과 BI 연동</li>
          </ul>
        </Card>
      </Section>

      <Section id="vision" title="비전 & 가치">
        <Card>
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-6 h-6 text-allpay.sky" />
            <h3 className="text-lg font-semibold">결제 기술로 세상을 연결하다</h3>
          </div>
          <p className="text-slate-700">
            AllPay는 기술 혁신과 신뢰를 바탕으로 고객의 성장을 가속하는 글로벌 결제 인프라가 되겠습니다.
          </p>
        </Card>
      </Section>

      <Section id="contact" title="문의">
        <Card>
          <p className="text-slate-700">영업/제휴 문의: contact@allpay.example</p>
          <p className="text-slate-700">보안/법무 문의: compliance@allpay.example</p>
        </Card>
        <footer className="container-pro mt-10 pb-20 text-center text-white/70">
          © {new Date().getFullYear()} AllPay. All rights reserved.
        </footer>
      </Section>
    </>
  );
}
