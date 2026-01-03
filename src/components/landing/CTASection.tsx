"use client";

import { Check, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  "모든 강의 무제한 수강",
  "실습 프로젝트 소스코드 제공",
  "수료증 발급",
  "1:1 질문 답변",
  "월간 라이브 세션",
  "취업 지원 서비스",
];

export function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0tNiA2aC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                지금 가입하면 30% 할인
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                지금 바로
                <br />
                학습을 시작하세요
              </h2>

              <p className="text-blue-100 text-lg mb-8 max-w-lg">
                체계적인 커리큘럼과 현업 전문가의 노하우로 실력을 빠르게
                향상시키세요. 7일 무료 체험으로 부담없이 시작해보세요.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center text-white">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  7일 무료 체험
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-colors"
                >
                  가격 안내 보기
                </Link>
              </div>
            </div>

            {/* Right Content - Pricing Card */}
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-sm w-full">
                {/* Plan Badge */}
                <div className="text-center mb-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                    가장 인기있는 플랜
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    프리미엄 멤버십
                  </h3>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-gray-400 line-through text-xl mr-2">
                      ₩49,900
                    </span>
                    <span className="text-5xl font-bold text-gray-900">
                      ₩34,900
                    </span>
                    <span className="text-gray-500 ml-1">/월</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    연간 결제 시 월 ₩29,900
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    모든 강의 무제한 수강
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    프로젝트 소스코드
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    수료증 발급
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    1:1 질문 답변
                  </li>
                </ul>

                {/* CTA Button */}
                <Link
                  href="/register?plan=premium"
                  className="block w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-center hover:opacity-90 transition-opacity"
                >
                  지금 시작하기
                </Link>

                {/* Guarantee */}
                <p className="text-center text-gray-500 text-sm mt-4">
                  7일 무료 체험 • 언제든 취소 가능
                </p>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}

