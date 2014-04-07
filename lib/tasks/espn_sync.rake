require 'espn_importer'

namespace :espn_sync do
  desc 'syn new stories from ESPN.com'
  task :espn => :environment do
    total = EspnImporter.import_espn
    puts "There are now #{total} stories from ESPN.com"
    puts "#{Laker.count} are Lakers stories"
  end
end