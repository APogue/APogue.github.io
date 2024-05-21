module Jekyll
  class FootnoteTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      "<sup id=\"fnref:#{@markup}\"><a href=\"#fn:#{@markup}\" class=\"footnote-ref\">#{@markup}</a></sup>"
    end
  end

  class FootnoteDefinition < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      content = super.strip
      "<div class=\"footnote\" id=\"fn:#{@markup}\"><p>#{content} <a href=\"#fnref:#{@markup}\" class=\"footnote-backref\">↩</a></p></div>"
    end
  end
end

Liquid::Template.register_tag('footnote', Jekyll::FootnoteTag)
Liquid::Template.register_tag('footnotedef', Jekyll::FootnoteDefinition)

