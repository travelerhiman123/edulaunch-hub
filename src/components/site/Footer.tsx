import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

import { institute, programs } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-gradient text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold">{institute.name}</h3>
          <p className="mt-2 max-w-sm text-sm text-primary-foreground/75">{institute.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href={institute.social.instagram} aria-label="Instagram" className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground">
              <Instagram className="size-4" />
            </a>
            <a href={institute.social.facebook} aria-label="Facebook" className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground">
              <Facebook className="size-4" />
            </a>
            <a href={institute.social.youtube} aria-label="YouTube" className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground">
              <Youtube className="size-4" />
            </a>
            <a href={institute.social.whatsapp} aria-label="WhatsApp" className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10 transition-colors hover:bg-accent hover:text-accent-foreground">
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Programs</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {programs.map((p) => (
              <li key={p.slug}>
                <Link to="/programs/$slug" params={{ slug: p.slug }} className="hover:text-accent">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-accent" />{institute.address}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 size-4 shrink-0 text-accent" /><a href={institute.phoneHref} className="hover:text-accent">{institute.phone}</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 size-4 shrink-0 text-accent" /><a href={institute.emailHref} className="hover:text-accent">{institute.email}</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 size-4 shrink-0 text-accent" />{institute.hours}</li>
          </ul>
          <ul className="mt-5 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-4 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {institute.name}. All rights reserved.
      </div>
    </footer>
  );
}
