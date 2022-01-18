using CleanArch.Client.Infrastructure.SEO.Metadata;
using CleanArch.Client.Infrastructure.SEO.Metadata.Icon;
using System.Collections.Generic;

namespace CleanArch.Client.Infrastructure.SEO
{
    public class MetadataHandler
    {
        public static AppMetadata GetAppMetadata()
        {
            AppMetadata appMetadata = new ();
            appMetadata.CharSet = "utf-8";
            appMetadata.PhoneNumberFormatDetection = "no";
            appMetadata.ApplicationName = "Milenko Raic";
            appMetadata.ApplicationDescription = "Connect, share, develop, and make it possible. It is more than a personal hub. It is about our development and progress. Get motivated and push yourself over the limit for a better life and a better environment. Become a developer and change the world.";
            appMetadata.ApplicatioManifestUrl = "/manifest.json";
            appMetadata.AndroidCapable = "yes";
            appMetadata.AppleCapable = "yes";
            appMetadata.AppleTitle = "Milenko Raic | Software & Web developer";
            appMetadata.MicrosoftUrl = "/";
            appMetadata.ThemeColor = "#ad2424";
            appMetadata.ViewPort = "width=device-width, initial-scale=1, shrink-to-fit=no";
            appMetadata.Authors = "Milenko Raic";
            appMetadata.Keywords.Add("milenko raic, web portfolio, web developer blogg, webbutveckling, programmering, programmera själv, digitalt arkiv, utvecklingssamtal, it tutorials, projektledning, startup ideas, vår miljö, inspiration, kreativitet, konst i aktion, it-tjänster, innehållsdelning och dejting, talangutveckling, instruktioner för nyanlända");
            appMetadata.Copyright = "Milenko Raic - Software engineer";
            return appMetadata;
        }

        public static OpenGraphDefault GetOpenGraphDefaultData() 
        {
            OpenGraphDefault openGraphDefault = new ();
            openGraphDefault.Title = "Milenko Raic | Software & Web developer";
            openGraphDefault.Type = ".Net Core MVC App";
            openGraphDefault.Name = "Software and web development by Milenko Raic";
            openGraphDefault.Description = "Connect, share, develop, and make it possible. It is more than a personal hub. It is all about our development and progress. Get motivated and push yourself over the limits for a better life and a better environment. Become a developer and change the world.";
            openGraphDefault.Url = "https://www.milenkoraic.me";
            openGraphDefault.Image = "https://milenkoraic.me/img/og-image.png";
            openGraphDefault.ImageSecureUrl = "https://milenkoraic.me/img/og-image.png";
            openGraphDefault.ImageAlt = "Together we grow, together we develop! - OpenGraph image";
            openGraphDefault.ImageWidth = "1200";
            openGraphDefault.ImageHeight = "630";
            openGraphDefault.ImageType = "image/png";
            return openGraphDefault;
         }

        public static OpenGraphTwitter GetOpenGraphTwitterData()
        {
            OpenGraphTwitter openGraphTwitter = new ();
            openGraphTwitter.Card = "summary";
            openGraphTwitter.Title = "Milenko Raic | Software & Web developer";
            openGraphTwitter.Description= "Connect, share, develop, and make it possible. It is more than a personal hub and portfolio. It is all about our development and progress. Get motivated and push yourself over the limits for a better life and a better environment. Become a developer and change the world.";
            openGraphTwitter.Image = "https://milenkoraic.me/img/og-image.png";
            return openGraphTwitter;
        }
            public static IEnumerable<Favicon> GetFavicons()
        {
            List<Favicon> favIcons = new();

            Favicon favIcon1 = new ();
            favIcon1.RelationValue = "icon";
            favIcon1.TypeValue = "image/png";
            favIcon1.SizeValue = "96x96";
            favIcon1.UrlPathValue = "/favicon-96x96.png";
            favIcons.Add(favIcon1);

            Favicon favIcon2 = new ();
            favIcon2.RelationValue = "icon";
            favIcon2.TypeValue = "image/png";
            favIcon2.SizeValue = "64x64";
            favIcon2.UrlPathValue = "/favicon-64x64.png";
            favIcons.Add(favIcon2);

            Favicon favIcon3 = new ();
            favIcon3.RelationValue = "icon";
            favIcon3.TypeValue = "image/png";
            favIcon3.SizeValue = "32x32";
            favIcon3.UrlPathValue = "/favicon-32x32.png";
            favIcons.Add(favIcon3);
            return favIcons;
        }

        public static IEnumerable<AppleIcon> GetAppleIcons()
        {
            List<AppleIcon> appleIcons = new();
            AppleIcon appleIcon1 = new ();
            appleIcon1.RelationValue = "apple-touch-icon";
            appleIcon1.SizeValue = "180x180";
            appleIcon1.UrlPathValue = "/favicon/apple/apple-touch-icon-180x180.png";
            appleIcons.Add(appleIcon1);

            AppleIcon appleIcon2 = new ();
            appleIcon2.RelationValue = "apple-touch-icon";
            appleIcon2.SizeValue = "152x152";
            appleIcon2.UrlPathValue = "/favicon/apple/apple-touch-icon-152x152.png";
            appleIcons.Add(appleIcon2);

            AppleIcon appleIcon3 = new ();
            appleIcon3.RelationValue = "apple-touch-icon";
            appleIcon3.SizeValue = "144x144";
            appleIcon3.UrlPathValue = "/favicon/apple/apple-touch-icon-144x144.png";
            appleIcons.Add(appleIcon3);

            AppleIcon appleIcon4 = new ();
            appleIcon4.RelationValue = "apple-touch-icon";
            appleIcon4.SizeValue = "120x120";
            appleIcon4.UrlPathValue = "/favicon/apple/apple-touch-icon-120x120.png";
            appleIcons.Add(appleIcon4);

            AppleIcon appleIcon5 = new ();
            appleIcon5.RelationValue = "apple-touch-icon";
            appleIcon5.SizeValue = "114x114";
            appleIcon5.UrlPathValue = "/favicon/apple/apple-touch-icon-114x114.png";
            appleIcons.Add(appleIcon5);

            AppleIcon appleIcon6 = new ();
            appleIcon6.RelationValue = "apple-touch-icon";
            appleIcon6.SizeValue = "76x76";
            appleIcon6.UrlPathValue = "/favicon/apple/apple-touch-icon-76x76.png";
            appleIcons.Add(appleIcon6);

            AppleIcon appleIcon7 = new ();
            appleIcon7.RelationValue = "apple-touch-icon";
            appleIcon7.SizeValue = "72x72";
            appleIcon7.UrlPathValue = "/favicon/apple/apple-touch-icon-72x72.png";
            appleIcons.Add(appleIcon7);

            AppleIcon appleIcon8 = new ();
            appleIcon8.RelationValue = "apple-touch-icon";
            appleIcon8.SizeValue = "60x60";
            appleIcon8.UrlPathValue = "/favicon/apple/apple-touch-icon-60x60.png";
            appleIcons.Add(appleIcon8);

            AppleIcon appleIcon9 = new ();
            appleIcon9.RelationValue = "apple-touch-icon";
            appleIcon9.SizeValue = "57x57";
            appleIcon9.UrlPathValue = "/favicon/apple/apple-touch-icon-57x57.png";
            appleIcons.Add(appleIcon9);


            return appleIcons;
        }
    }
}
