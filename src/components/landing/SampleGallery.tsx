"use client";

import { useState } from "react";
import { Play, X, Clock, ChevronRight } from "lucide-react";

const sampleVideos = [
  {
    id: 1,
    title: "Next.js App Router 소개",
    course: "Next.js 마스터 클래스",
    duration: "12:34",
    thumbnail: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "TypeScript 제네릭 이해하기",
    course: "실전 TypeScript 완벽 가이드",
    duration: "15:21",
    thumbnail: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "ChatGPT API 연동 기초",
    course: "AI 서비스 개발 부트캠프",
    duration: "18:45",
    thumbnail: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "React Server Components",
    course: "Next.js 마스터 클래스",
    duration: "20:12",
    thumbnail: "from-orange-500 to-red-500",
  },
];

export function SampleGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<(typeof sampleVideos)[0] | null>(null);

  const openModal = (video: (typeof sampleVideos)[0]) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            무료 샘플 강의
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            결제 전에 강의 스타일과 퀄리티를 직접 확인해보세요
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleVideos.map((video) => (
            <button
              key={video.id}
              onClick={() => openModal(video)}
              className="group text-left bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${video.thumbnail}`}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 flex items-center bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm flex items-center">
                  {video.course}
                  <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Free Trial CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">
              더 많은 무료 강의를 원하시나요?
            </h3>
            <p className="text-gray-400 mb-6">
              회원가입만 하면 모든 강의의 첫 3개 레슨을 무료로 시청할 수 있어요
            </p>
            <a
              href="/register"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              무료로 시작하기
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player Placeholder */}
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${selectedVideo.thumbnail} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
                <p className="text-gray-400">
                  비디오 플레이어가 여기에 표시됩니다
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  (Vimeo 연동 후 실제 영상 재생)
                </p>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {selectedVideo.title}
              </h3>
              <p className="text-gray-400">{selectedVideo.course}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

