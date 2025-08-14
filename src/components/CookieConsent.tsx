
import React, { useEffect, useState } from 'react';
import { 
  AlertDialog, 
  AlertDialogAction, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle 
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';


const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);
  
  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setShowConsent(false);
  };
  
  const handleAcceptNecessary = () => {
    localStorage.setItem('cookie-consent', 'necessary');
    setShowConsent(false);
  };

  return (
    <AlertDialog open={showConsent}>
      <AlertDialogContent className="max-w-xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-bnb-green2">{t('cookieConsent.title')}</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="mb-4">
              {t('cookieConsent.description')}
            </p>
            <p className="text-sm mb-2">
              {t('cookieConsent.necessary')}
            </p>
            <p className="text-sm">
              {t('cookieConsent.analytics')}
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            onClick={handleAcceptNecessary}
            className="w-full sm:w-auto"
          >
            {t('cookieConsent.acceptNecessary')}
          </Button>
          <Button 
            className="bg-bnb-green2 hover:bg-bnb-green2/90 text-gray w-full sm:w-auto"
            onClick={handleAcceptAll}
          >
            {t('cookieConsent.acceptAll')}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CookieConsent;
