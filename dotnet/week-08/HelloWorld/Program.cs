using System;

namespace HelloWorld
{
    class Program
    {


        // functions  w/params
        // static ReturnType Name(Pararms....)

        static int Sum(int a, int b)
        {
            return a + b;
        }

        static bool IsNumberHigherThan5(int num)
        {
            return num > 5;
        }

        static void Main(string[] args)
        {
            // objects

            // variables
            // in JS
            /*
                let score = 5;
                const team2 = "Bobcats";

             */
            //In C#
            //  int score = 5;

            // //  float fl = 5.5;
            // //  decimal dec;
            // //  double dou; 
            // score = 5.5;

            const string CONSTANT_NAME = "value";

            var score = 5;
            score = 12;
            score++;
            score += 6;

            // System.Console.WriteLine(score);


            // if 

            // if (score < 23)
            // {
            //     System.Console.WriteLine("Team 1 wins");
            // }
            // else if (score > 35)
            // {
            //     System.Console.WriteLine("team 2 wins");
            // }
            // else
            // {
            //     System.Console.WriteLine("tie");
            // }

            // bool isRunning = true;
            var isRunning = true;
            // loops
            while (score < 21)
            {
                score++;
            }

            for (var i = 0; i < 10; i++)
            {
                // System.Console.WriteLine(i);
            }

            // functions 

            // var rand = new Random().Next(0, 10);
            // System.Console.WriteLine($"Your random number is {rand}");
            // System.Console.WriteLine(IsNumberHigherThan5(rand));


            // Arrays
            // I/O

            Console.WriteLine("Hello World, welcome to .net!!");
            var input = Console.ReadLine();

            System.Console.WriteLine($"You typed in \"{input}\".");

        }
    }
}
