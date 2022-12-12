import Marquee from "../../components/marquee/Marquee"

const Landing = () => {
  return (
    <main className="relative h-full">
      <div className="lg:w-2/3 mx-auto">

        <div className="bg-teal-900/80 rounded p-2 drop-shadow  text-center m-2 mt-20 ">
            Dr. May has been serving the North Adams community with expert chiropractic care for over 25 years. 
        </div>


        <div className="flex mt-10">
          <img 
            className="w-2/3 rounded-l-md" 
            src="/src/images/office_cover_photo.jpeg" 
            alt="office"/>
          <img 
            className="w-1/3 rounded-r-md border-l-0 border-4 lg:border-6 bg-borderGreen lg:p-1 lg:pl-0 border-borderGreen" src="/src/images/serenity_dad.jpeg" 
            alt="office"/>
        </div>

        <div className="m-5 ">
          <br />
          <div className="text-center text-xl">
            73 Church Street <br/> North Adams, MA 01247
          </div>
          <div className="text-center text-xl text-amber-500">
            (413) 664-9050 
          </div>

          <br />
          <div className="bg-emerald-900/80 rounded p-2 drop-shadow text-center">
            In my 36+ years as a chiropractor I have helped 1000&#39;s of patients in our community
            with problems ranging from routine neck and back pain, to “pinched nerves”, headaches, a
            variety of arm-shoulder-wrist pain and hip-knee-ankle-foot pain, and more. Every
            complaint is unique to the individual. I will do everything I can to help you. Most importantly, I
            will give you excellent advice and home instructions on how to help yourself get better faster.
            And, if you are interested, I will go beyond that and give you vitally important information,
            instruction, and advice on how to improve your overall health.
          </div>
        </div>

        <br />
        <Marquee />

        <div className="m-5  bg-emerald-900/30 p-5 rounded drop-shadow">
        <p className="text-center text-2xl mb-8">
          Frequently Asked Questions
        </p>

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* QUESTION */}
          <div className="flex">
            <img 
              className="rounded-full mr-5 w-20 h-20 drop-shadow hover:animate-spin" 
              src="/src/images/max_bush.jpeg" 
              alt="max_behind_bush" />
            <div className="bg-teal-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded">
              Are you taking new patients? And how far out are you booking?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 m-1 my-auto p-2 drop-shadow rounded">
              Yes, I am accepting new patients. And, I can usually see them within a few days after
              their call. Sometimes, the same day. My hours are, by appointment.
            </div>
            <img 
              className="rounded-full ml-5 w-20 h-20 drop-shadow hover:animate-spin" 
              src="/src/images/baby_dad_head.jpeg" 
              alt="baby_dad_head"/>
          </div>

          <br />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* QUESTION */}
          <div className="flex mt-5">
            <img 
              className="rounded-full mr-5 w-20 h-20 drop-shadow hover:animate-spin" 
              src="/src/images/max_cool.jpg" 
              alt="max_2_cool_4_cool" />
            <div className="bg-teal-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded">
              Do you take my health insurance?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 my-auto p-2 drop-shadow rounded">
              Currently, I am only accepting BC/BS of Massachusetts and Medicare. I am not on
              other provider panels. You still have insurance. But, you will have to pay as you go, submit
              the claim yourself, and accept whatever they reimburse you. You will need to discuss this
              with your insurance company to find out their reimbursement for “out-of-network
              providers.”
              Whatever insurance you have, you are always responsible for deductibles and co-
              pays. For most patients with insurance, this means they are paying close to my self-pays
              fees anyway.
              Note: your insurance doesn&#39;t pay for your electrician, plumber, or even your hair and
              nail appointments, etc. But, you still use them and pay for them, when needed. Isn&#39;t your
              health as, or more, important?
            </div>
            <img 
              className="rounded-full ml-5 w-20 h-20 drop-shadow hover:animate-spin"  
              src="/src/images/dad_headshot.jpeg" 
              alt="normal_dad_head"/>
          </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          {/* QUESTION */}
          <div className="flex mt-10">
            <img 
              className="rounded-full mr-5 w-20 h-20 drop-shadow hover:animate-spin" 
              src="/src/images/max_jeep.jpg" 
              alt="max_jeep" />
            <div className="bg-teal-900 text-gray-300 m-1 my-auto p-2 drop-shadow rounded">
              How much is a visit?
            </div>
          </div>
          {/* ANSWER */}
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 my-auto p-2 drop-shadow rounded">
              On the initial office visit we go over the requisite paperwork. Then, we go into the room,
              do a history and exam. Based on that, I will give you a diagnosis that you will understand.
              Next, and most importantly, I will give you explicit verbal and written home instructions to
              expedite healing. Then, I will explain what I am going to do and YES, I DO treat on the
              first visit. All of that takes about 1 hour. $125.00 Subsequent visits are $50.00

            </div>
            <img 
              className="rounded-full ml-5 w-20 h-20 drop-shadow hover:animate-spin" 
              src="/src/images/serenity_dad_head.jpeg" 
              alt="normal_dad_head"/>
          </div>
          {/* ANSWER pt. 2 */}
          <div className="flex mt-2">
            <div className="bg-slate-300 text-teal-900 my-auto p-2 drop-shadow rounded">
              <div className="text-orange-700">
                Note for Medicare patients:
              </div>
              Medicare and your supplemental insurance DO NOT COVER the initial exam. You are
              responsible for the $125.00 fee. On the initial, and on subsequent, visits Medicare
              covers 80% of the treatment cost and your supplemental insurance, if you have it, will
              probably cover the remaining 20%.
            </div>
            <img 
              className="rounded-full ml-5 w-20 h-20 drop-shadow hover:animate-spin" 
              src="/src/images/dad_black_eye.jpeg" 
              alt="normal_dad_head"/>
          </div>
        </div>

        <Marquee />

      </div>
    </main>
  )
}

export default Landing