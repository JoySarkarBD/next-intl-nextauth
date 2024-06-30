export default function Footer() {
  return (
    <footer className='bg-gray-800 py-4'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='flex justify-center items-center'>
          <p className='text-gray-300 text-sm'>
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
