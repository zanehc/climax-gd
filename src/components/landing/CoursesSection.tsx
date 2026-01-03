"use client";

import { Clock, Users, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Next.js 마스터 클래스",
    description: "풀스택 웹 개발의 모든 것을 배우는 실전 프로젝트 강의",
    thumbnail: "/images/courses/nextjs.webp",
    instructor: "김개발",
    price: 129000,
    originalPrice: 199000,
    duration: "32시간",
    students: 2341,
    rating: 4.9,
    tags: ["웹 개발", "React", "Next.js"],
    badge: "베스트셀러",
  },
  {
    id: 2,
    title: "실전 TypeScript 완벽 가이드",
    description: "타입스크립트로 더 안전하고 확장성 있는 코드 작성하기",
    thumbnail: "/images/courses/typescript.webp",
    instructor: "이타입",
    price: 99000,
    originalPrice: 149000,
    duration: "24시간",
    students: 1876,
    rating: 4.8,
    tags: ["TypeScript", "JavaScript"],
    badge: "신규",
  },
  {
    id: 3,
    title: "AI 서비스 개발 부트캠프",
    description: "ChatGPT API를 활용한 실전 AI 서비스 개발",
    thumbnail: "/images/courses/ai.webp",
    instructor: "박인공",
    price: 159000,
    originalPrice: 249000,
    duration: "40시간",
    students: 987,
    rating: 4.9,
    tags: ["AI", "ChatGPT", "Python"],
    badge: "인기",
  },
];

export function CoursesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            인기 강의
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            현업 전문가들이 직접 제작한 실무 중심 강의로 실력을 키워보세요
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                {/* Placeholder gradient - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-20">
                    {course.title.charAt(0)}
                  </span>
                </div>

                {/* Badge */}
                {course.badge && (
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        course.badge === "베스트셀러"
                          ? "bg-yellow-400 text-yellow-900"
                          : course.badge === "신규"
                          ? "bg-green-400 text-green-900"
                          : "bg-red-400 text-white"
                      }`}
                    >
                      {course.badge}
                    </span>
                  </div>
                )}

                {/* Hover Play Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {course.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Instructor */}
                <p className="text-gray-500 text-sm mb-4">
                  {course.instructor} 강사
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()}명
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-yellow-400" />
                    {course.rating}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-gray-400 line-through text-sm mr-2">
                      ₩{course.originalPrice.toLocaleString()}
                    </span>
                    <span className="text-xl font-bold text-gray-900">
                      ₩{course.price.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            모든 강의 보기
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

