import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./Header";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={styles.float}
      aria-label="Chat with Ever Shine on WhatsApp"
    >
      <MessageCircle size={24} strokeWidth={1.8} />
    </a>
  );
}
