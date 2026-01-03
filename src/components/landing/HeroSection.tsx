"use client";

import { ArrowRight, Play, Star, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              2026년 최고의 온라인 강의 플랫폼
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              당신의{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                성장
              </span>
              을 위한
              <br />
              프리미엄 강의
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              실무 중심의 고품질 온라인 강의로 당신의 커리어를 한 단계
              업그레이드하세요. 현업 전문가들이 직접 제작한 콘텐츠를 만나보세요.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
              >
                강의 둘러보기
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
                <Play className="w-5 h-5 mr-2 text-blue-600" />
                무료 샘플 보기
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-900">
                  <Users className="w-6 h-6 mr-2 text-blue-600" />
                  10,000+
                </div>
                <p className="text-gray-500 text-sm mt-1">수강생</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-900">
                  <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                  50+
                </div>
                <p className="text-gray-500 text-sm mt-1">강의</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div className="text-center">
                <div className="flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-900">
                  <Star className="w-6 h-6 mr-2 text-yellow-500 fill-yellow-500" />
                  4.9
                </div>
                <p className="text-gray-500 text-sm mt-1">평점</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl">
              {/* Video Thumbnail Placeholder */}
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group">
                    <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                {/* Sample Course Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                    <p className="text-white/80 text-sm mb-1">현재 인기 강의</p>
                    <h3 className="text-white font-semibold">
                      실전 프로젝트로 배우는 웹 개발 완성
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">수료율</p>
                    <p className="text-gray-900 font-bold">94%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white" />
                    <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">현재 수강중</p>
                    <p className="text-gray-900 font-bold">1,234명</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

