"use client";

import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-black selection:text-black">
            <Navbar />

            <div className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto font-inter">
                <h1 className="text-4xl lg:text-6xl font-monda font-bold mb-12">
                    Privacy Policy
                </h1>

                <div className="space-y-8 text-white/90 leading-relaxed">
                    <section>
                        <p className="mb-4">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                        </p>
                        <p className="text-sm text-white/60">
                            Effective Date: January 1, 2025 | Last updated: January 1, 2025
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">1. Introduction</h2>
                        <p>
                            Welcome to Aviation Training Centre ("we," "our," or "us"). We are committed to protecting your privacy and ensuring a secure online experience. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our aviation training services.
                        </p>
                        <p className="mt-2">
                            By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">2. Information We Collect</h2>

                        <h3 className="text-xl font-semibold text-[#C49A6C] mb-2">2.1 Personal Information</h3>
                        <p className="mb-4">
                            We may collect personal information that you voluntarily provide to us, including:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mb-6">
                            <li>Full name and contact details (email address, phone number)</li>
                            <li>Residential and mailing addresses</li>
                            <li>Date of birth and nationality</li>
                            <li>Educational background and qualifications</li>
                            <li>Professional experience and certifications</li>
                            <li>Payment information for course registration</li>
                            <li>Government-issued identification documents</li>
                            <li>Medical certificates and fitness reports</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-2">2.2 Non-Personal Information</h3>
                        <p className="mb-4">
                            We automatically collect certain non-personal information about your interaction with our website:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Browser type, version, and operating system</li>
                            <li>IP address and general location information</li>
                            <li>Pages visited and time spent on our website</li>
                            <li>Referring website and search terms</li>
                            <li>Device information and screen resolution</li>
                            <li>Click patterns and user behavior</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">3. How We Use Your Information</h2>
                        <p className="mb-4">We use the collected information for the following purposes:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Process course registrations and manage student records</li>
                            <li>Provide aviation training services and support</li>
                            <li>Communicate important updates about courses and schedules</li>
                            <li>Send promotional materials and newsletters (with your consent)</li>
                            <li>Improve our website functionality and user experience</li>
                            <li>Comply with regulatory requirements and legal obligations</li>
                            <li>Conduct research and analytics to enhance our services</li>
                            <li>Provide customer support and respond to inquiries</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">4. Information Sharing and Disclosure</h2>
                        <p className="mb-4">We may share your information in the following circumstances:</p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-white">Service Providers</h4>
                                <p>We may share information with trusted third-party service providers who assist us in operating our website, processing payments, and delivering services.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Regulatory Authorities</h4>
                                <p>We may disclose information to comply with aviation regulations, DGCA requirements, and other legal obligations.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Legal Requirements</h4>
                                <p>We may disclose information if required by law, court order, or government request.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">Business Transfers</h4>
                                <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">5. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 mb-4">
                            <li>Encryption of sensitive data during transmission and storage</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication procedures</li>
                            <li>Secure data centers and infrastructure</li>
                            <li>Employee training on data protection practices</li>
                        </ul>
                        <p>
                            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">6. Your Rights and Choices</h2>
                        <p className="mb-2">You have the following rights regarding your personal information:</p>
                        <ul className="list-disc pl-5 space-y-1 mb-4">
                            <li><strong>Access:</strong> Request a copy of your personal information</li>
                            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                            <li><strong>Portability:</strong> Receive your data in a structured format</li>
                            <li><strong>Objection:</strong> Object to certain processing activities</li>
                            <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                        </ul>
                        <p>To exercise these rights, please contact us using the information provided below.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">7. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. These technologies help us:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 mb-4">
                            <li>Remember your preferences and settings</li>
                            <li>Provide personalized content and recommendations</li>
                            <li>Analyze website performance and usage patterns</li>
                            <li>Improve our services and user experience</li>
                        </ul>
                        <p>
                            You can manage your cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">8. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites, including DGCA portals, payment processors, and social media platforms. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4 text-gold-gradient">9. Children's Privacy</h2>
                        <p>
                            Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4">10. International Data Transfers</h2>
                        <p>
                            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-monda font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 mt-2 mb-4">
                            <li>Posting the updated policy on our website</li>
                            <li>Sending email notifications to registered users</li>
                            <li>Displaying prominent notices on our website</li>
                        </ul>
                        <p>
                            Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.
                        </p>
                    </section>

                    <section className="bg-[#111] p-8 rounded-2xl border border-white/10">
                        <h2 className="text-2xl font-monda font-semibold text-[#C49A6C] mb-6">12. Contact Us</h2>
                        <p className="mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="space-y-3">
                            <p><strong className="text-white">Email:</strong> info.atcaviation@gmail.com</p>
                            <p><strong className="text-white">Phone:</strong> +91 9355133320, +91 9355277747</p>
                            <p><strong className="text-white">Address:</strong> Plot No. 16, Block H-1/A, Sector-63, Noida, 161301</p>
                            <p><strong className="text-white">Business Hours:</strong> Monday-Sunday (10:00 AM to 6:00 PM)</p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
