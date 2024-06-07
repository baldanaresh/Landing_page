import React from 'react';

const Features = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Choose your Domain</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700 font-medium mb-4">Programming Languages</p>
              <p className="text-gray-500">Become a Coder</p>
              <button  className='bg-slate-700 rounded-sm text-white font-medium w-14 mt-2 hover:bg-green-500'>Click</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700 font-medium mb-4">Cloud Engineer</p>
              <p className="text-gray-500">Become a Cloud Expert</p>
              <button  className='bg-slate-700 rounded-sm text-white font-medium w-14 mt-2 hover:bg-green-500'>Click</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded shadow-md">
              <p className="text-gray-700 font-medium mb-4">Frontend Developer</p>
              <p className="text-gray-500">Become a Website Owner</p>
              <button  className='bg-slate-700 rounded-sm text-white font-medium w-14 mt-2 hover:bg-green-500'>Click</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;