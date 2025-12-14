import React from 'react'

function Rob() {
    return (
        <div className="min-h-screen bg-gray-100 font-[Noto_Sans_Devanagari] py-10">
            <div className="max-w-[900px] mx-auto bg-white p-8 rounded-lg shadow-md">

                {/* Authority Title */}
                <h1 className="text-center text-[#1f3c88] text-[26px] font-bold mb-2">
                    जयपुर विकास प्राधिकरण, जयपुर
                </h1>

                {/* Page Title */}
                <h1 className="text-center text-black text-[22px] font-semibold mb-8">
                    संक्षिप्त विवरण
                </h1>

                {/* Section */}
                <section>
                    <h2 className="mt-8 text-[#2c3e50] font-semibold border-l-4 border-[#1f3c88] pl-3">
                        कार्य का नाम
                    </h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        एल.सी.-214 (सी-बी-आई / बिन्दुनी फाटक) पर आर.ओ.बी. (रेल ओवर ब्रिज) निर्माण कार्य
                    </p>
                </section>

                <section>
                    <h2 className="mt-8 text-[#2c3e50] font-semibold border-l-4 border-[#1f3c88] pl-3">
                        परिचय
                    </h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        सी-बी-आई / बिन्दुनी फाटक पर बनाया जाने वाला यह चार लेन का आरओबी खो-नागोरियन रोड
                        को 07 नंबर चौराहा, जगतपुरा, महल रोड से जोड़ेगा। यह रेल्वे फाटक जयपुर–दिल्ली
                        रेल्वे लाइन पर स्थित एक महत्वपूर्ण क्रॉसिंग है, जो दिनभर में कई बार बंद रहता है।
                    </p>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        इसके कारण प्रतिदिन लगभग 35,000 वाहनों की आवाजाही प्रभावित होती है और
                        यातायात जाम व प्रदूषण की समस्या उत्पन्न होती है।
                    </p>
                </section>

                <section>
                    <h2 className="mt-8 text-[#2c3e50] font-semibold border-l-4 border-[#1f3c88] pl-3">
                        बजट घोषणा
                    </h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        राजस्थान सरकार द्वारा बजट वर्ष 2024–25 के अंतर्गत जयपुर विकास प्राधिकरण
                        द्वारा एल.सी.-214 पर आरओबी निर्माण की घोषणा की गई है।
                    </p>
                </section>

                <section>
                    <h2 className="mt-8 text-[#2c3e50] font-semibold border-l-4 border-[#1f3c88] pl-3">
                        परियोजना का विवरण
                    </h2>
                    <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
                        <li>आरओबी की लंबाई: 950 मीटर</li>
                        <li>चौड़ाई: 17–20 मीटर</li>
                        <li>ढाल: 1:30</li>
                        <li>दोनों ओर 7.5 मीटर की सर्विस रोड</li>
                        <li>1.5 मीटर फुटपाथ, ड्रेनेज एवं विद्युतिकरण कार्य</li>
                        <li>पैदल यात्रियों व दोपहिया वाहनों हेतु सीमित ऊँचाई का सब-वे</li>
                    </ul>
                </section>

                <section>
                    <h2 className="mt-8 text-[#2c3e50] font-semibold border-l-4 border-[#1f3c88] pl-3">
                        परियोजना से लाभ
                    </h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        आरओबी निर्माण से खो-नागोरियन रोड से 07 नंबर चौराहा, जगतपुरा, महल रोड तक
                        निर्बाध यातायात संभव होगा, जिससे आसपास के क्षेत्रों का विकास होगा।
                    </p>
                </section>

                <section>
                    <h2 className="mt-8 text-[#2c3e50] font-semibold border-l-4 border-[#1f3c88] pl-3">
                        वर्तमान स्थिति
                    </h2>

                    <div className="overflow-x-auto mt-4">
                        <table className="w-full border border-gray-300 text-sm">
                            <thead>
                                <tr className="bg-[#1f3c88] text-white">
                                    <th className="border px-4 py-2 text-left">विवरण</th>
                                    <th className="border px-4 py-2 text-left">जानकारी</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="even:bg-gray-50">
                                    <td className="border px-4 py-2">प्रशासनिक एवं वित्तीय स्वीकृति</td>
                                    <td className="border px-4 py-2">₹94.91 करोड़ (17-01-2025)</td>
                                </tr>
                                <tr className="even:bg-gray-50">
                                    <td className="border px-4 py-2">कार्यादेश</td>
                                    <td className="border px-4 py-2">₹95.77 करोड़ (01-07-2025)</td>
                                </tr>
                                <tr className="even:bg-gray-50">
                                    <td className="border px-4 py-2">एजेंसी</td>
                                    <td className="border px-4 py-2">मैसर्स पद्मावती एंटरप्राइजेज (JV)</td>
                                </tr>
                                <tr className="even:bg-gray-50">
                                    <td className="border px-4 py-2">कार्य प्रारंभ तिथि</td>
                                    <td className="border px-4 py-2">10-07-2025</td>
                                </tr>
                                <tr className="even:bg-gray-50">
                                    <td className="border px-4 py-2">कार्य समाप्ति तिथि</td>
                                    <td className="border px-4 py-2">09-07-2027</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Rob;