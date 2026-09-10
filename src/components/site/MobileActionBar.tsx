import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, PencilLine } from "lucide-react";

import { institute } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur-md sm:hidden">
      <a href={institute.phoneHref} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-primary">
        <Phone className="size-4" />
        Call
      </a>
      <a
        href={institute.whatsappHref}
        className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs font-semibold text-primary"
      >
        <MessageCircle className="size-4" />
        WhatsApp
      </a>
      <Link
        to="/contact"
        hash="enquiry"
        className="flex flex-col items-center gap-1 bg-accent py-3 text-xs font-semibold text-accent-foreground"
      >
        <PencilLine className="size-4" />
        Enquire
      </Link>
    </div>
  );
}
