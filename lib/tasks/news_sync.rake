require 'espn_importer'
require 'official_site_importer'
require 'latimes_importer'
require 'ocregister_importer'
require 'dailynews_importer'
require 'cbs_importer'
require 'galaxy_blogs_importer'
require 'chivas_blogs_importer'
require 'ducks_blogs_importer'
require 'bruins_blogs_importer'
require 'trojans_blogs_importer'
require 'bleacher_report_importer'
require 'lakers_blogs_importer'
require 'la_sports_hub_importer'
require 'fox_sports_importer'

namespace :news_sync do
  desc 'sync news stories'
  task :news => :environment do
    EspnImporter.import_espn
    OfficialSiteImporter.import_official_news
    OCRegisterImporter.import_oc_register
    CBSImporter.import_cbs
    GalaxyImporter.import_blogs
    ChivasImporter.import_blogs
    DucksImporter.import_blogs
    TrojansImporter.import_blogs
    BleacherReportImporter.import_bleacher_report
    LASportsHubImporter.import_la_sports_hub
    FoxSportsImporter.import_fox_sports
    DailyNewsImporter.import_daily_news
    LATimesImporter.import_la_times
    LakersImporter.import_blogs
    BruinsImporter.import_blogs

    puts "There are now #{Laker.count} Lakers stories."
    puts "There are now #{Dodger.count} Dodgers stories."
    puts "There are now #{Clipper.count} Clippers stories."
    puts "There are now #{King.count} Kings stories."
    puts "There are now #{Bruin.count} Bruins stories."
    puts "There are now #{Trojan.count} Trojan stories."
    puts "There are now #{Galaxy.count} Galaxy stories."
    puts "There are now #{Spark.count} Sparks stories."
    puts "There are now #{Chiva.count} Chivas stories."
    puts "There are now #{Duck.count} Ducks stories."
    puts "There are now #{Angel.count} Angels stories."
    puts "There are now #{Prep.count} High School stories."
  end
end