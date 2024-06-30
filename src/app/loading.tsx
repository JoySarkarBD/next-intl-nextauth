export default function LoadingPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='flex items-center justify-center space-x-2'>
        <div
          className='w-4 h-4 rounded-full bg-blue-500 animate-wave'
          style={{ animationDelay: "-0.4s" }}></div>
        <div
          className='w-4 h-4 rounded-full bg-blue-500 animate-wave'
          style={{ animationDelay: "-0.3s" }}></div>
        <div
          className='w-4 h-4 rounded-full bg-blue-500 animate-wave'
          style={{ animationDelay: "-0.2s" }}></div>
        <div
          className='w-4 h-4 rounded-full bg-blue-500 animate-wave'
          style={{ animationDelay: "-0.1s" }}></div>
        <div className='w-4 h-4 rounded-full bg-blue-500 animate-wave'></div>
      </div>
    </div>
  );
}
