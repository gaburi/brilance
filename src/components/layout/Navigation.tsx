import { useState } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export const Navigation: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Nossa Missão', href: '#missao' },
    { label: 'Como Funciona', href: '#como' },
    { label: 'Para Quem', href: '#para-quem' },
    { label: 'Diferenciais', href: '#diferenciais' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-4 md:top-12 lg:top-[70px] left-0 right-0 mx-auto w-fit z-50 bg-white/90 rounded-full md:rounded-[79px] px-4 md:px-12 lg:px-[85px] py-3 md:py-[16px] flex items-center gap-4 md:gap-6 lg:gap-[40px]"
      data-node-id="1:38"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Logo Section: Hamburger + Brilance Text */}
      <motion.div
        className="flex items-center gap-3 md:gap-[21px] shrink-0"
        data-node-id="1:39"
        whileHover={{ scale: 1.05 }}
      >
        {/* Hamburger Menu Icon - Mobile Only */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <motion.button
              className="w-6 h-3 shrink-0 flex flex-col justify-between cursor-pointer"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full h-[1.5px] bg-black" />
              <div className="w-full h-[1.5px] bg-black" />
              <div className="w-full h-[1.5px] bg-black" />
            </motion.button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[300px] bg-white/95 backdrop-blur-md">
            <div className="flex flex-col gap-8 mt-8">
              {/* Mobile menu items */}
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-xl font-semibold font-sans text-black hover:text-blue-600 transition-colors py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        {/* Brilance Logo Text */}
        <motion.div
          className="text-black text-[18px] md:text-[22px] lg:text-[24px] font-semibold font-sans text-center whitespace-nowrap"
          data-node-id="1:44"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Brilance
        </motion.div>
      </motion.div>

      {/* Navigation Menu Items - Hidden on mobile, visible on tablet+ */}
      <motion.div
        className="hidden md:flex items-center gap-4 md:gap-6 lg:gap-[40px] font-sans font-semibold text-[16px] md:text-[18px] lg:text-[20px] text-black text-center whitespace-nowrap shrink-0"
        data-node-id="1:45"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {navItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-black hover:text-[#5c3e94] transition-colors duration-300"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
            }}
            data-node-id={`1:${46 + index}`}
          >
            {item.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
