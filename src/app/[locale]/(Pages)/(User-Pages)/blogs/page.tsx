import { getPosts } from "@/services/get-service";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Suspense, use } from "react";
import LoadingPage from "../../loading";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore our collection of blog posts covering various topics. Stay informed with our latest updates and insights.",
};

interface PageProps {
  params: {
    locale: string;
  };
}

export default function Page({ params }: PageProps) {
  const t = useTranslations("BlogPage");
  const posts = use(getPosts());

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-extrabold text-gray-900'>
            {t("title")}
          </h1>
        </div>
        <Suspense fallback={<LoadingPage />}>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {posts.map((post: any) => (
              <div key={post.id} className='bg-white shadow-md rounded-lg p-6'>
                <h2 className='text-2xl font-bold text-gray-900'>
                  {post.title}
                </h2>
                <p className='mt-2 text-gray-600'>{post.body}</p>
                <Link href={`/blogs/${post.id}`}>
                  <p className='mt-4 text-blue-600 hover:text-blue-800'>
                    {t("readMore")}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
