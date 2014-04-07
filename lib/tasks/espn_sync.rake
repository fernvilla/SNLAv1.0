require 'espn_importer'

namespace :espn_sync do
  desc 'sync new stories from ESPN.com'
  task :espn => :environment do
    total = EspnImporter.import_espn

    puts "There are now #{Laker.count} Lakers stories."
    puts "There are now #{Dodger.count} Dodgers stories."
    puts "There are now #{Clipper.count} Clippers stories."
    puts "There are now #{King.count} Kings stories."
    puts "There are now #{Bruin.count} Bruins stories."
  end
end