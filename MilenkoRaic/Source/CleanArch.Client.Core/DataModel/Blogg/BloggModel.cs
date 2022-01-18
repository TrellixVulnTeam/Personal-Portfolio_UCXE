using System;

namespace CleanArch.Client.Core.DataModel.Blogg
{
    public class BloggModel
    {
        public static int PostId {get;set;}
        public static int BlogCategoryId{ get;set;}
        public static string PostAuthor { get; set; }
        public static string PostImageUrl { get; set; }
        public static string PostImageAlt { get; set; }
        public static string PostTitle { get; set; }
        public static string PostSubtitle { get; set; }
        public static string PostContentShort { get; set; }
        public static string PostContentLong{ get; set; }
        public static bool IsVisible { get; set; }
        public static DateTime DataCreated { get; set; }
        public static DateTime DataUpdated { get; set; }
    }
}
