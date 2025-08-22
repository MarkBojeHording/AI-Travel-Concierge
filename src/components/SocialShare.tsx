import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Link2, Mail } from "lucide-react";
import { useState, useCallback, memo } from "react";

interface SocialShareProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

const SocialShare = memo(({ title, description, url = window.location.href, image }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);

  const shareData = {
    title,
    text: description || `Check out this amazing travel destination: ${title}`,
    url
  };

  const handleShare = useCallback(async (platform: string) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedDescription = encodeURIComponent(description || `Check out this amazing travel destination: ${title}`);
    const encodedUrl = encodeURIComponent(url);

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%20${encodedUrl}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
        return;
      case 'native':
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            console.error('Error sharing:', err);
          }
        }
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  }, [title, description, url]);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground mr-2">Share:</span>

      <Button
        size="icon"
        variant="outline"
        className="w-8 h-8 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-smooth"
        onClick={() => handleShare('facebook')}
      >
        <Facebook className="w-4 h-4" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="w-8 h-8 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-smooth"
        onClick={() => handleShare('twitter')}
      >
        <Twitter className="w-4 h-4" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="w-8 h-8 hover:bg-primary hover:text-white hover:border-primary transition-smooth"
        onClick={() => handleShare('email')}
      >
        <Mail className="w-4 h-4" />
      </Button>

      <Button
        size="icon"
        variant="outline"
        className="w-8 h-8 hover:bg-accent hover:text-white hover:border-accent transition-smooth"
        onClick={() => handleShare('copy')}
      >
        <Link2 className="w-4 h-4" />
      </Button>

      {copied && (
        <span className="text-xs text-accent font-medium animate-fade-in">
          Copied!
        </span>
      )}

      {navigator.share && (
        <Button
          size="sm"
          variant="outline"
          onClick={() => handleShare('native')}
          className="text-xs hover:bg-gradient-tropical hover:text-white hover:border-transparent transition-smooth"
        >
          Share
        </Button>
      )}
    </div>
  );
});

export default SocialShare;
