-- ----------------------------
-- Table structure for blogg
-- ----------------------------
DROP TABLE IF EXISTS "public"."blogg";
CREATE TABLE "public"."blogg" (
  "post_id" SERIAL NOT NULL,
  "blogg_category_id" int NOT NULL,
  "post_author" text NOT NULL,
  "post_image_url" text NOT NULL,
  "post_image_alt" text NOT NULL,
  "post_title" text NOT NULL,
  "post_subtitle" text NOT NULL,
  "post_content_short" text NOT NULL,
  "post_content_long" text NOT NULL,
  "is_visible" bool NOT NULL,
  "date_created" timestamptz(6) NOT NULL,
  "date_updated" timestamptz(6) NOT NULL
);

-- ----------------------------
-- Records of blogg
-- ----------------------------
INSERT INTO "public"."blogg" VALUES (
1, 
1,
'Milenko Raic',
'/img/blogg/2021-12-14/new-york.jpeg',
'New York city lights',
'City Lights in New York',
'The city that never sleeps.',
'In the Big Apple, they come in all sizes and all colors: HIDs and LEDs, Landlords Haloes and expansive spotlights. They outline the Empire State Building and permeate Times Square.', 
'This is long version of blogg and it is cool. In the Big Apple, they come in all sizes and all colors: HIDs and LEDs, Landlords Haloes and expansive spotlights. They outline the Empire State Building and permeate Times Square.', 
't',
'2022-01-06 18:00:19.867286+00', 
'2022-01-06 18:00:19.867286+00');


-- ----------------------------
-- Primary Key structure for table blogg
-- ----------------------------
ALTER TABLE "public"."blogg" ADD CONSTRAINT "blogg_pkey" PRIMARY KEY ("post_id")