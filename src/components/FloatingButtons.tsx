import { MessageCircle, Contact } from "lucide-react";

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=919599818171&text=Hello,%20I%20need%20treatment%20plan%20for:",
      "_blank"
    );
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 md:hidden">
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      <button
        onClick={scrollToContact}
        className="w-14 h-14 bg-fortis-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
      >
        <Contact className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;
