using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GeekQuiz.Models
{
    public class Question
    {
        public string Title { get; set; }

        public IList<Option> Options { get; set; }
    }
}