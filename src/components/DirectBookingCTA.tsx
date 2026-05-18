import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface DirectBookingCTAProps {
  className?: string;
  showValueProp?: boolean;
  size?: 'default' | 'md';
}

const DirectBookingCTA: React.FC<DirectBookingCTAProps> = ({
  className,
  showValueProp = false,
  size = 'default',
}) => {
  const { t } = useLanguage();

  return (
    <div className={cn('flex flex-col items-start gap-2', className)}>
      <Button
        asChild
        size={size}
        className="group bg-bnb-green text-bnb-dark hover:bg-bnb-dark_green hover:text-bnb-dark shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      >
        <Link to="/reservations" onClick={() => window.scrollTo(0, 0)}>
          {t('booking.cta')}
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
      {showValueProp && (
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-bnb-green">
          {t('booking.valueProp')}
        </p>
      )}
    </div>
  );
};

export default DirectBookingCTA;
