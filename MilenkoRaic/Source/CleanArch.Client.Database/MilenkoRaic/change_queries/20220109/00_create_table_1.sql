-- ----------------------------
-- Table structure for service
-- ----------------------------
DROP TABLE IF EXISTS "public"."service";
CREATE TABLE "public"."service" (
  "service_id" SERIAL NOT NULL,
  "service_name" text NOT NULL,
  "is_active" bool NOT NULL,
  "date_created" timestamptz(6) NOT NULL,
  "date_updated" timestamptz(6) NOT NULL
);

-- ----------------------------
-- Records of service
-- ----------------------------
INSERT INTO "public"."service" VALUES (1, 'IT consulting', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (2, 'Web development', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (3, 'Web design', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (4, 'Website administration', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (5, 'Digital marketing', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (6, 'Social networks', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (7, 'Cloud hosting', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (8, 'Domain managment', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (9, 'SEO optimization', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (10, 'Software development', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (11, 'IT automation', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (12, 'Brand identity', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (13, 'Graphic design', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (14, 'Logo design', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');
INSERT INTO "public"."service" VALUES (15, 'IT support', 't', '2022-01-06 18:00:19.867286+00', '2022-01-06 18:00:19.867286+00');

-- ----------------------------
-- Primary Key structure for table service
-- ----------------------------
ALTER TABLE "public"."service" ADD CONSTRAINT "service_pkey" PRIMARY KEY ("service_id");