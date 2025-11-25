import { Navigation } from './Navigation';
import type { HeaderProps } from '@/types';

export const Header: React.FC<HeaderProps> = ({
  transparent = false,
  sticky = true,
}) => {
  return (
    <header
      className={`${sticky ? 'sticky top-0' : 'relative'} ${
        transparent ? 'bg-transparent' : ''
      } z-50`}
    >
      <Navigation />
    </header>
  );
};

export default Header;
