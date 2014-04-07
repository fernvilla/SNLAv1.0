require 'espn_importer'

namespace :espn_sync do
  desc 'sync new stories from ESPN.com'
  task :espn => :environment do
    total = EspnImporter.import_espn
    puts "There are now #{total.count} stories from ESPN.com."
    puts "#{Laker.count} are Lakers stories."
    puts "#{Dodger.count} are Dodgers stories."
    puts "#{Clipper.count} are Clippers stories."
  end
end