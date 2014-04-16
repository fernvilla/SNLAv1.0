require 'feedjira'

class BleacherReportImporter
  def self.import_bleacher_report
    source = "Bleacher Report"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=203")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=202")
    angels_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=97")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=112")
    bruins_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=461")
    bruins_feed_two = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=336")
    trojans_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=458")
    trojans_feed_two = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=333")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=139")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=141")
    chivas_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=255")
    galaxy_feed = Feedjira::Feed.fetch_and_parse("http://bleacherreport.com/articles/feed?tag_id=259")

    lakers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    clippers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Clipper.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    angels_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Angel.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    dodgers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Dodger.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    bruins_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Bruin.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    bruins_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Bruin.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    trojans_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Trojan.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    trojans_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Trojan.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    ducks_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Duck.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    kings_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      King.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    chivas_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Chiva.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end

    galaxy_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      Galaxy.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        image:      entry.image,
        source:     source
      )
    end
  end
end