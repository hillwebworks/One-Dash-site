import CustomVideoPlayer from '@/components/CustomVideoPlayer';

const videos = [
  { src: '/videos/VIDEO-2025-12-09-18-20-47.mp4', title: 'One Dash Product Showcase' },
  { src: '/videos/VIDEO-2025-12-09-18-20-47 2.mp4', title: 'Authentic Jamaican Flavor' },
  { src: '/videos/VIDEO-2025-12-09-18-20-47 3.mp4', title: 'One Dash Cooking' },
  { src: '/videos/VIDEO-2025-12-09-18-39-19.mp4', title: 'Jamaican Marinade Recipes' },
  { src: '/videos/VIDEO-2025-12-09-18-43-42.mp4', title: 'One Dash in Action' },
  { src: '/videos/VIDEO-2025-12-09-18-53-21.mp4', title: 'Cooking with One Dash' },
  { src: '/videos/VIDEO-2025-12-09-20-07-32.mp4', title: 'One Dash Product Demo' },
  { src: '/videos/VIDEO-2025-12-09-20-07-36.mp4', title: 'Authentic Taste of Jamaica' },
  { src: '/videos/VIDEO-2025-12-09-20-08-22.mp4', title: 'One Dash Seasoning' },
  { src: '/videos/VIDEO-2025-12-09-20-19-47.mp4', title: 'One Dash Recipes' },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Video <span className="text-[#DC143C]">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our collection of videos showcasing One Dash products, recipes, and authentic Jamaican cooking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden p-2">
              <CustomVideoPlayer
                src={video.src}
                title={video.title}
                className="w-full aspect-video"
                autoplay={true}
                muted={true}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/#products"
            className="inline-block bg-[#DC143C] hover:bg-[#B8122F] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-lg"
          >
            Shop One Dash Products
          </a>
        </div>
      </div>
    </div>
  );
}

