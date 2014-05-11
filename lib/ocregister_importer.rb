require 'feedjira'

class OCRegisterImporter
  def self.import_oc_register
    source = "OC Register"
    preps_feed = Feedjira::Feed.fetch_and_parse("http://www.ocvarsity.com/common/rss/rss.php")
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=18904")
    angels_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=18902")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=19965")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=18907")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=18903")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=19968")
    bruins_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=18906")
    trojans_feed = Feedjira::Feed.fetch_and_parse("http://www.ocregister.com/common/rss/rss.php?catID=18905")

    if defined? preps_feed.entries
      preps_feed.entries.each do |entry|
        summary = entry.summary.gsub(/<[^>]*>/, '')
        Prep.where(url: entry.url).first_or_create(
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

    if defined? lakers_feed.entries
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
    end

    if defined? angels_feed.entries
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
    end

    if defined? clippers_feed.entries
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
    end

    if defined? dodgers_feed.entries
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
    end

    if defined? ducks_feed.entries
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
    end

    if defined? kings_feed.entries
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
    end

    if defined? bruins_feed.entries
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
    end

    if defined? trojans_feed.entries
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
    end
  end
end