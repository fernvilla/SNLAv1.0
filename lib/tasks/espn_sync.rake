require 'espn_importer'

namespace :espn_sync do
  desc 'sync new stories from ESPN.com'
  task :espn => :environment do
    total = EspnImporter.import_espn
    puts "There are now #{total} stories from ESPN.com."
    puts "#{Laker.count} are Lakers stories."
    puts "#{Dodger.count} are Dodgers stories."
  end
end