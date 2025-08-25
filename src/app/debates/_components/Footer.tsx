"use client";

import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground">YouthDebate</h4>
            </div>
            <p className="text-muted-foreground font-serif">
              Empowering young voices in human rights discussions.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-3 font-sans">Platform</h5>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li><a href="#" className="hover:text-foreground transition-colors">Live Debates</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Apply to Debate</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-3 font-sans">Support</h5>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="font-semibold text-foreground mb-3 font-sans">Legal</h5>
            <ul className="space-y-2 text-muted-foreground font-serif">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Code of Conduct</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground font-serif">
          <p>
            &copy; 2025 YouthDebate. All rights reserved. Built for the next generation of human rights advocates.
          </p>
        </div>
      </div>
    </footer>
  );
}
