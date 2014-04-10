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
      summary = entry.summary.gsub(/<[^>]*>/, '')
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
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      Laker.where(url: entry.url).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
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
        source:     source
      )
    end

    dodgers_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      Dodger.where(url: entry.url).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
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
        source:     source
      )
    end

    clippers_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      Clipper.where(url: entry.url).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
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
        source:     source
      )
    end

    kings_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      King.where(url: entry.url).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
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
        source:     source
      )
    end

    bruins_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      Bruin.where(title: entry.title).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
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
        source:     source
      )
    end

    trojans_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      Trojan.where(title: entry.title).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
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
        source:     source
      )
    end

    angels_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      Angel.where(url: entry.url).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
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
        source:     source
      )
    end

    ducks_feed_two.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
      title = entry.title.gsub(/#x26;/, '')
      Duck.where(url: entry.url).first_or_create(
        title:      title,
        author:     entry.author,
        summary:    summary,
        published:  entry.published,
        url:        entry.url,
        source:     source
      )
    end

    sparks_feed.entries.each do |entry|
      summary = entry.summary.gsub(/<[^>]*>/, '')
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
      summary = entry.summary.gsub(/<[^>]*>/, '')
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
      summary = entry.summary.gsub(/<[^>]*>/, '')
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