require 'espn_importer'
require 'official_site_importer'
require 'latimes_importer'

namespace :news_sync do
  desc 'sync new stories'
  task :news => :environment do
    EspnImporter.import_espn
    OfficialSiteImporter.import_official_news
    LATimesImporter.import_la_times

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
  end
end