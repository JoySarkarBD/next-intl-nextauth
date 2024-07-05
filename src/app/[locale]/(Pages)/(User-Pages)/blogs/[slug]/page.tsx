import { getPost } from "@/services/get-service";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Suspense, use } from "react";
import LoadingPage from "../../../loading";

interface PostPageProps {
  params: {
    slug: string;
    locale: string;
  };
}
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: `Blog || ${post?.title}`,
    description: post?.body,
  };
}

export default function Page({ params }: PostPageProps) {
  const t = useTranslations("BlogPage");

  const post = use(getPost(params.slug));

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='container mx-auto px-4'>
        <Suspense fallback={<LoadingPage />}>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h1 className='text-3xl font-bold text-gray-900'>{post?.title}</h1>
            <p className='mt-4 text-gray-600'>{post?.body}</p>
            <Link href='/blogs'>
              <p className='mt-4 text-blue-600 hover:text-blue-800'>
                {t("backToBlog")}
              </p>
            </Link>
          </div>
        </Suspense>
      </div>
    </div>
  );
}
