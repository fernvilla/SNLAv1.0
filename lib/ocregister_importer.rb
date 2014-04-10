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

    preps_feed.entries.each do |entry|
      Prep.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    lakers_feed.entries.each do |entry|
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    angels_feed.entries.each do |entry|
      Angel.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    clippers_feed.entries.each do |entry|
      Clipper.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    dodgers_feed.entries.each do |entry|
      Dodger.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    ducks_feed.entries.each do |entry|
      Duck.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    kings_feed.entries.each do |entry|
      King.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    bruins_feed.entries.each do |entry|
      Bruin.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    trojans_feed.entries.each do |entry|
      Trojan.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end
  end
end