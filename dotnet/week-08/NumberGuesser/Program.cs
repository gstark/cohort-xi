using System;

namespace NumberGuesser
{
    class Program
    {
        static void Main(string[] args)
        {
            // set a number range (min/max)
            var min = 0;
            var max = 100;
            // tell user to pick a number
            System.Console.WriteLine($"Think of a number between {min} and {max}");
            // pick the first guess of the users number
            var pick = (max + min) / 2;
            // ask the user if higher or lower than our pick
            System.Console.WriteLine($"Is your number higer or lower or equal to {pick}");
            // get the user answer (yes/higher/lower)
            var userAnswer = Console.ReadLine();
            // reset the number based on the user answer
            /*
             if (higher){
                 min = pick
             } else if (lower){
                 max = pick
             } else if (yes){
                 display victory message
             }
             */
            // repeat until guessed


        }
    }
}
