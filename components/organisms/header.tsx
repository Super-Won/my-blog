"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Sparkles, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet } from "@/components/ui/sheet";
import { NAV_CONFIG } from "@/lib/data";
import { useTheme } from "@/components/providers/theme-provider";

function Header({ onConsult }: { onConsult: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-2xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-base font-bold tracking-tight text-foreground">
            <span className="text-primary">Elec</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="主导航">
          {NAV_CONFIG.main.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {link.label}
              {link.label === "课程" && (
                <span className="ml-1.5 inline-flex items-center rounded-md bg-emerald/15 px-1.5 py-0 text-[10px] font-semibold text-emerald border border-emerald/20">
                  NEW
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            aria-label="官网"
          >
            <Globe className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "切换到亮色模式" : "切换到暗色模式"}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          <Button
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex h-8 px-4 text-xs font-semibold"
            onClick={onConsult}
          >
            立即报名
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-8 w-8"
            onClick={() => setDrawerOpen(true)}
            aria-label="打开导航菜单"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Sheet open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <nav className="flex flex-col gap-1" aria-label="移动端导航">
          {NAV_CONFIG.main.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="rounded-lg px-4 py-3 text-base text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                setDrawerOpen(false);
                onConsult();
              }}
            >
              立即报名
            </Button>
          </div>
        </nav>
      </Sheet>
    </header>
  );
}

export { Header };
