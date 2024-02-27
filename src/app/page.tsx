import MaxwidthWrapper from "@/components/MaxWidthWrapper";
export default function Home() {
  return (
  <MaxwidthWrapper >
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
    <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Devtools Project{' '}
            <span className='text-blue-600'>
              Group A
            </span>
            .
          </h1>
    </div>
  </MaxwidthWrapper>
  );
}
