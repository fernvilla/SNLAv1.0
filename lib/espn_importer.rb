require 'feedjira'

class EspnImporter
  def self.import_espn
    source = "ESPN"
    lakers_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angeleslakers")
    lakers_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/lakers/")
    dodgers_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesdodger-report")
    dodgers_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/dodgers/")
    clippers_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesclippers")
    clippers_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/clippers/")
    kings_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angeleskings")
    kings_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/los-angeles-kings/")
    bruins_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesucla")
    bruins_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/ucla-bruins/")
    trojans_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesusc")
    trojans_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/usc-trojans/")
    angels_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesangels")
    angels_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/los-angeles-angels/")
    ducks_feed = Feedjira::Feed.fetch_and_parse("http://espn.go.com/blog/feed?blog=los-angelesanaheim-ducks")
    ducks_feed_two = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/anaheim-ducks/")
    sparks_feed = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/los-angeles-sparks/")
    galaxy_feed = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/los-angeles-galaxy/")
    chivas_feed = Feedjira::Feed.fetch_and_parse("http://search.espn.go.com/rss/chivas-usa/")

    lakers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    lakers_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    dodgers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Dodger.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    dodgers_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Dodger.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    clippers_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Clipper.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    clippers_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Clipper.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    kings_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      King.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    kings_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      King.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    bruins_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Bruin.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    bruins_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Bruin.where(title: entry.title).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    trojans_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Trojan.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    trojans_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Trojan.where(title: entry.title).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    angels_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Angel.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    angels_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Angel.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    ducks_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Duck.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    ducks_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Duck.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    sparks_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Spark.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    galaxy_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Galaxy.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    chivas_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<a.*?<\/a>/, '')
      Chiva.where(url: entry.url).first_or_create(
        title:      entry.title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end
  end
end