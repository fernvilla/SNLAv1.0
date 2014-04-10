require 'feedjira'

class LATimesImporter
  def self.import_la_times
    source = "LA Times"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/basketball/nba/lakers/rss2.0.xml")
    lakers_feed_two = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/lakersnow/rss2.0.xml")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/basketball/nba/clippers/rss2.0.xml")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/baseball/mlb/dodgers/rss2.0.xml")
    dodgers_feed_two = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/dodgersnow/rss2.0.xml")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/hockey/nhl/kings/rss2.0.xml")
    trojans_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/college/usc/rss2.0.xml")
    bruins_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/college/ucla/rss2.0.xml")
    sparks_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/rss/topic/sports/basketball/los-angeles-sparks-ORSPT000448.topic")
    preps_feed = Feedjira::Feed.fetch_and_parse("http://www.latimes.com/sports/highschool/rss2.0.xml")

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

    lakers_feed_two.entries.each do |entry|
      Laker.where(url: entry.url).first_or_create(
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

    dodgers_feed_two.entries.each do |entry|
      Dodger.where(url: entry.url).first_or_create(
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

    sparks_feed.entries.each do |entry|
      Spark.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    entry.summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

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
  end
end